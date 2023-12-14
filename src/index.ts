import express, { ErrorRequestHandler } from "express";
import { PROTOCOL as protocol, PORT as port, HOST as host } from "./constants";
import { mainRouter } from "./routes/mainRouter";
import { translatorRouter } from "./routes/translatorRouter";
import { ValidationError, handleError } from "./utils/error";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app
  .use(
    cors({
      origin: `${protocol}://${host}:${port}`,
      methods: ["POST"],
      // optionsSuccessStatus: 202
    })
  )
  .use(bodyParser.json()) // Dodano middleware do parsowania ciała żądania w formie JSON
  .use(handleError)
  .use(mainRouter)
  .use(translatorRouter)
  .listen(port, () => console.log(`Listening on port ${port}`));
