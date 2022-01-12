import { IOrdersRepository } from "../IOrdersRepository";
import { IOrder, Order } from "../../entities/Order";
import { connection } from "mongoose";
import Database from "../../infra/Database";

export class MongoOrdersRepository implements IOrdersRepository {
   constructor(dbPath: string) {
      new Database().createConnection(dbPath);
   }

   async getOrder(idTransacao: string): Promise<IOrder> {
      return await Order.findOne({ idTransacao: idTransacao }).select('-_id');
   }

   async findByCreationDate(creationDate: Date): Promise<IOrder> {
      return await Order.findOne({ dataOrdem: creationDate });
      
   }

   async save(client: IOrder): Promise<void> {
      await Order.create(client);
   }
}