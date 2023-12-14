import express, { ErrorRequestHandler } from 'express';
import { PROTOCOL as protocol, PORT as port, HOST as host } from './constants';
import { mainRouter } from './routes/mainRouter';
import { translatorRouter } from './routes/translatorRouter';
// import { ValidationError, handleError } from './utils/error';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app
	.use(
		cors({
			origin: '*',
			methods: ['GET', 'POST'],
		})
	)
	.use(bodyParser.json())
	.use(mainRouter)
	.use(translatorRouter)
	.listen(port, () => console.log(`Listening on port ${port}`));
