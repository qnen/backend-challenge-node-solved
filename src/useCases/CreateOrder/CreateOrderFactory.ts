import { MongoClientsRepository } from "../../repositories/implementations/MongoClientsRepository";
import { MongoOrdersRepository } from "../../repositories/implementations/MongoOrdersRepository";
import { MongoProductsRepository } from "../../repositories/implementations/MongoProductsRepository";
import { CreateOrderContoller } from "./CreateOrderController";
import { CreateOrderUseCase } from "./CreateOrderUseCase";

export const createOrderFactory = () => {
   const mongoOrdersRepository = new MongoOrdersRepository(process.env.MONGO_URI);
   const mongoClientsRepository = new MongoClientsRepository(process.env.MONGO_URI);
   const mongoProductsRepository = new MongoProductsRepository(process.env.MONGO_URI);
   const createOrderUseCase = new CreateOrderUseCase(
      mongoOrdersRepository,
      mongoClientsRepository,
      mongoProductsRepository
   );
   const createOrderController = new CreateOrderContoller(createOrderUseCase);
   return createOrderController;
}