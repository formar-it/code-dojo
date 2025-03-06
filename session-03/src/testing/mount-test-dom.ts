import "../index.css";

export function mountTestDom() {
  const world = document.createElement("canvas");
  world.id = "world";
  document.body.appendChild(world);
}
