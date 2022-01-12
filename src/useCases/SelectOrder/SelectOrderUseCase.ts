import { IOrdersRepository } from "../../repositories/IOrdersRepository";
import { IOrder, Order } from "../../entities/Order";

export interface ISelectOrderRequestDTO {
   idTransacao: string
}

export class SelectOrderUseCase {
   constructor(
      private ordersRepository: IOrdersRepository
   ) { }

   async execute(data: ISelectOrderRequestDTO): Promise<IOrder> {

      return await this.ordersRepository.getOrder(data.idTransacao);

   }
}