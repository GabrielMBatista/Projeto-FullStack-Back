import dotenv from "dotenv";
import {AddressInfo} from "net";
import express from "express";
import { userRouter } from "./routes/userRouter";
import { playListRouter } from "./routes/playListRouter";
import { musicRouter } from "./routes/musicRouter";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/list", playListRouter);
app.use("/music", musicRouter);

const server = app.listen(3000, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
  });