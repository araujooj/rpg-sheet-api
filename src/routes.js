import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import CharacterController from './app/controllers/CharacterController';
import StatusController from './app/controllers/StatusController';
import ExpertiseController from './app/controllers/ExpertiseController';
import AttackController from './app/controllers/AttackController';
import EquipmentsController from './app/controllers/EquipmentsController';
import MagicsController from './app/controllers/MagicsController';
import AuthMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);
routes.use(AuthMiddleware);

routes.get('/users', UserController.index);
routes.get('/user', UserController.show);
routes.put('/users', UserController.update);

routes.post('/characters', CharacterController.store);
routes.put('/characters/:id', CharacterController.update);
routes.get('/characters/:id', CharacterController.show);
routes.get('/characters', CharacterController.index);
routes.delete('/characters/:id', CharacterController.delete);

routes.post('/status', StatusController.store);
routes.put('/status/:id', StatusController.update);
routes.get('/status/:id', StatusController.show);

routes.post('/expertise', ExpertiseController.store);
routes.put('/expertise/:id', ExpertiseController.update);
routes.get('/expertise/:id', ExpertiseController.show);

routes.post('/attacks', AttackController.store);
routes.put('/attacks/:id', AttackController.update);
routes.get('/attacks/:characterId', AttackController.index);
routes.delete('/attacks/:id', AttackController.delete);

routes.post('/equipments', EquipmentsController.store);
routes.put('/equipments/:id', EquipmentsController.update);
routes.get('/equipments/:characterId', EquipmentsController.index);
routes.delete('/equipments/:id', EquipmentsController.delete);

routes.post('/magics', MagicsController.store);
routes.put('/magics/:id', MagicsController.update);
routes.get('/magics/:characterId', MagicsController.index);
routes.delete('/magics/:id', MagicsController.delete);


routes.post('/files', upload.single('file'), FileController.store);


export default routes;
