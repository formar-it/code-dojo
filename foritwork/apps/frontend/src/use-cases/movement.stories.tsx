import type { Story } from "@ladle/react";
import App from "../App.tsx";
import { User } from "app-domain";

const user: User = {
  id: "1",
  position: {
    x: 200,
    y: 200,
  },
};

// const world = { user={}}

export const Simple: Story = () => <App user={user} />;
