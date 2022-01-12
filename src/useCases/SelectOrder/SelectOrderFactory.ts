import { MongoOrdersRepository } from "../../repositories/implementations/MongoOrdersRepository";
import { SelectOrderContoller } from "./SelectOrderController";
import { SelectOrderUseCase } from "./SelectOrderUseCase";

export const selectOrderFactory = () => {
   const mongoOrdersRepository = new MongoOrdersRepository(process.env.MONGO_URI);
   const selectOrderUseCase = new SelectOrderUseCase(mongoOrdersRepository);
   const selectOrderController = new SelectOrderContoller(selectOrderUseCase);
   return selectOrderController;
}