import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import CharacterController from './app/controllers/CharacterController';
import AuthMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);
routes.use(AuthMiddleware);

routes.get('/users', UserController.index);
routes.put('/users', UserController.update);

routes.post('/characters', CharacterController.store);
routes.put('/characters/:id', CharacterController.update);
routes.get('/characters', CharacterController.index);
routes.delete('/characters/:id', CharacterController.delete);

routes.post('/files', upload.single('file'), FileController.store);


export default routes;
