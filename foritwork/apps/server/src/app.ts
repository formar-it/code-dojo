/* eslint-disable @typescript-eslint/no-misused-promises */
import express from "express";
import { createServer } from "node:http";
import { Server, Socket } from "socket.io";
import { User } from "app-domain";
import cors from "cors";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(
  cors({
    origin: "*",
  })
);

const usersSockets: Map<string, Socket> = new Map<string, Socket>();

io.on("connection", (socket: Socket) => {
  const { userId } = socket.handshake.auth;

  if (typeof userId !== "string") {
    socket.disconnect(true);
    return;
  }

  usersSockets.set(userId, socket);

  socket.on("sync", (user: User) => {
    socket.broadcast.emit("syncOthers", user);
  });

  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected", userId);
    socket.broadcast.emit("userDisconnected", userId);
    usersSockets.delete(userId);
  });
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
