import { useEffect, useRef } from "react";
import { Direction, MapService, moveUser, User } from "app-domain";
import { Application, Assets, Sprite } from "pixi.js";
import "./App.css";

export interface AppProps {
  user: User;
}

function App({ user }: AppProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const init = async () => {
    const app = new Application();
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

  return (
    <>
      <canvas ref={canvasRef}></canvas>
    </>
  );
}

export default App;

async function createCharacter(app: Application, user: User) {
  const texture = await Assets.load("https://pixijs.com/assets/bunny.png");
  const bunny = new Sprite(texture);
  app.stage.addChild(bunny);
  bunny.anchor.set(0.5);
  bunny.position.set(user.position.x, user.position.y);

  const mapService: MapService = {
    isPositionFree() {
      return true;
    },
  };
  window.addEventListener("keydown", (e) => {
    const direction = mapKeyToDirection(e.key);
    if (direction) {
      moveUser(user, mapService, direction);
      bunny.position.set(user.position.x, user.position.y);
    }
  });
}
function mapKeyToDirection(key: string): Direction | null {
  switch (key) {
    case "w":
    case "ArrowUp":
      return Direction.N;
    case "d":
    case "ArrowRight":
      return Direction.E;
    case "s":
    case "ArrowDown":
      return Direction.S;
    case "a":
    case "ArrowLeft":
      return Direction.W;
    default:
      return null;
  }
}
