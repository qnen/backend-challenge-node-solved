import { MongoClientsRepository } from "../../repositories/implementations/MongoClientsRepository";
import { CreateClientContoller } from "./CreateClientController";
import { CreateClientUseCase } from "./CreateClientUseCase";



export const createClientFactory = () => {
   const mongoClientsRepository = new MongoClientsRepository(process.env.MONGO_URI);
   const createClientUseCase = new CreateClientUseCase(mongoClientsRepository);
   const createClientController = new CreateClientContoller(createClientUseCase);
   return createClientController;
}