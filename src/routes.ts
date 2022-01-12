import { Router } from 'express';
import { createClientFactory } from './useCases/CreateClient/CreateClientFactory';
import { createOrderFactory } from './useCases/CreateOrder/CreateOrderFactory';
import { createProductFactory } from './useCases/CreateProduct/CreateProductFactory';
import { selectOrderFactory } from './useCases/SelectOrder/SelectOrderFactory';

const routes = Router();

routes.post('/clients', (request, response) => {
   createClientFactory().handle(request, response)
});

routes.post('/products', (request, response) => {
   createProductFactory().handle(request, response)
});

routes.post('/orders', (request, response) => {
   createOrderFactory().handle(request, response)
});
routes.get('/orders/:idTransacao', (request, response) => {
   selectOrderFactory().handle(request, response)
});

export { routes };