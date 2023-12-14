import express from "express";
import * as dotenv from "dotenv";
import { PROTOCOL as protocol, PORT as port, HOST as host } from "./constants";
import { mainRouter } from "./routes/mainRouter";
import { translatorRouter } from "./routes/translatorRouter";
import { handleError } from "./utils/error";
import cors from "cors";
dotenv.config();
const app = express();
app
  .use(
    cors({
      origin: `${protocol}://${host}:${port}`,
      methods: ["POST"],
      // optionsSuccessStatus: 202
    })
  )
  .use(handleError)
  .use(mainRouter)
  .use(translatorRouter)
  .listen(port, () => console.log(`Listening on port ${port}`));
