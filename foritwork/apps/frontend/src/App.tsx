import { useEffect, useRef } from "react";
import { MapService, moveUser, User } from "app-domain";
import { Application as PixiApp, Assets, Sprite } from "pixi.js";
import "./App.css";
import { InputManagerImplementation } from "./input/input-manager.ts";

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

async function createCharacter(app: PixiApp, user: User) {
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

  const inputManager = new InputManagerImplementation();

  const loop = () => {
    const direction = inputManager.movementDirection();
    moveUser(user, mapService, direction);
    bunny.position.set(user.position.x, user.position.y);
    requestAnimationFrame(loop);
  };

  //TODO(Piarrot): Add a way to stop the loop when the component unmounts
  requestAnimationFrame(loop);
}
