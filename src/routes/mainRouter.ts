import { Router, Request, Response } from 'express';
const mainRouter = Router().get('/', (_req: Request, res: Response) =>
	res.json({
		ok: true,
	})
);
export { mainRouter };
