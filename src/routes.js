import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import AuthMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// login
routes.post('/sessions', SessionController.store);
// signup
routes.post('/users', UserController.store);
routes.use(AuthMiddleware);

routes.get('/users', UserController.index);
routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);


export default routes;
