import type { Story } from "@ladle/react";
import App from "../App.tsx";
import { Point, User } from "app-domain";

const user: User = {
  id: "1",
  position: new Point(200, 200),
};

// const world = { user={}}

export const Simple: Story = () => <App user={user} />;
