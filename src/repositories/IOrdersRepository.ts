import { IOrder } from "../entities/Order";

export interface IOrdersRepository {
   findByCreationDate(creationDate: Date): Promise<IOrder>;
   getOrder(idTransacao: string): Promise<IOrder>;
   save(order: IOrder): Promise<void>;
}