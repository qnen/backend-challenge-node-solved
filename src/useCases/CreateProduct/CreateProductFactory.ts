import { MongoProductsRepository } from "../../repositories/implementations/MongoProductsRepository";
import { CreateProductContoller } from "./CreateProductController";
import { CreateProductUseCase } from "./CreateProductUseCase";

export const createProductFactory = () => {
   const mongoProcutsRepository = new MongoProductsRepository(process.env.MONGO_URI);
   const createProductUseCase = new CreateProductUseCase(mongoProcutsRepository);
   const createProductController = new CreateProductContoller(createProductUseCase);
   return createProductController;
}