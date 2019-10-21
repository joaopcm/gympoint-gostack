import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import SessionController from './app/controllers/SessionController';
import SessionValidator from './app/validators/SessionValidator';

import StudentController from './app/controllers/StudentController';
import StudentValidator from './app/validators/StudentValidator';

import DiscountPlanController from './app/controllers/DiscountPlanController';

import EnrolmentController from './app/controllers/EnrolmentController';

const routes = new Router();

routes.post('/sessions', SessionValidator.store, SessionController.store);

routes.use(authMiddleware);

routes.get('/students', StudentController.index);
routes.post('/students', StudentValidator.store, StudentController.store);
routes.put('/students/:id', StudentValidator.update, StudentController.update);

routes.get('/plans', DiscountPlanController.index);
routes.post('/plans', DiscountPlanController.store);
routes.put('/plans/:id', DiscountPlanController.update);
routes.delete('/plans/:id', DiscountPlanController.delete);

routes.get('/enrolments', EnrolmentController.index);
routes.post('/students/:studentId/enrolments', EnrolmentController.store);
routes.put('/students/:studentId/enrolments', EnrolmentController.update);
routes.delete('/students/:studentId/enrolments', EnrolmentController.delete);

export default routes;
