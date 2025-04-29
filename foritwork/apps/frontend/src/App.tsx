import { useEffect, useRef } from "react";
import { MapService, moveUser, SyncService, User } from "app-domain";
import { Application as PixiApp, Assets, Sprite } from "pixi.js";
import "./App.css";
import { InputManagerImplementation } from "./input/input-manager.ts";
import { io, Socket } from "socket.io-client";

export interface AppProps {
  user: User;
}

function App({ user }: AppProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const init = async () => {
    const app = new PixiApp();
    await app.init({
      background: "#1099bb",
      resizeTo: window,
      canvas: canvasRef.current!,
    });

    createCharacter(app, user);
  };

  useEffect(() => {
    init();
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}

export default App;

async function createCharacterSprite(app: PixiApp, user: User) {
  const texture = await Assets.load("https://pixijs.com/assets/bunny.png");
  const bunny = new Sprite(texture);
  app.stage.addChild(bunny);
  bunny.anchor.set(0.5);
  bunny.position.set(user.position.x, user.position.y);

  return bunny;
}

async function createCharacter(app: PixiApp, user: User) {
  const bunny = await createCharacterSprite(app, user);
  const mapService: MapService = {
    isPositionFree() {
      return true;
    },
  };

  const inputManager = new InputManagerImplementation();

  const syncService = new ConcreteSyncService(user.id, app);

  const loop = () => {
    const direction = inputManager.movementDirection();
    moveUser({ user, mapService, syncService }, direction);
    bunny.position.set(user.position.x, user.position.y);
    requestAnimationFrame(loop);
  };

  //TODO(Piarrot): Add a way to stop the loop when the component unmounts
  requestAnimationFrame(loop);
}

const users: Map<string, Sprite> = new Map();

class ConcreteSyncService implements SyncService {
  private socket: Socket;
  constructor(
    private userId: string,
    private app: PixiApp
  ) {
    this.socket = io("http://localhost:3000", {
      auth: {
        token: "ROOM-TOKEN",
        userId: this.userId,
      },
    });

    this.socket.on("syncOthers", async (user: User) => {
      if (!users.has(user.id)) {
        users.set(user.id, await createCharacterSprite(this.app, user));
      } else {
        users.get(user.id)!.position.set(user.position.x, user.position.y);
      }
    });

    this.socket.on("userDisconnected", (userId: string) => {
      if (users.has(userId)) {
        this.app.stage.removeChild(users.get(userId)!);
        users.delete(userId);
      }
    });
  }
  async sync(user: User): Promise<void> {
    this.socket.emit("sync", user);
  }
}
