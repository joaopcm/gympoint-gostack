import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import SessionController from './app/controllers/SessionController';
import SessionValidator from './app/validators/SessionValidator';

import StudentController from './app/controllers/StudentController';
import StudentValidator from './app/validators/StudentValidator';

const routes = new Router();

routes.post('/sessions', SessionValidator.store, SessionController.store);

routes.use(authMiddleware);

routes.get('/students', StudentController.index);
routes.post('/students', StudentValidator.store, StudentController.store);

export default routes;
