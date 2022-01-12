import { Express } from 'express';

import appMiddlewares from './middlewares';
import 'dotenv/config';

export default function appConfig(app: Express): void {
   appMiddlewares(app);
}