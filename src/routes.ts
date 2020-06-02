import express from 'express';

import PointsController from './controller/PointsController';
import ItemsController from './controller/ItemsController';

// index (list), show (get specific item), create, update, delete
const routes = express.Router();
const itemsController = new ItemsController();
const pointsController = new PointsController();

routes.get('/items', itemsController.index);
routes.post('/points', pointsController.create);
routes.get('/points/:id', pointsController.show);

export default routes;
