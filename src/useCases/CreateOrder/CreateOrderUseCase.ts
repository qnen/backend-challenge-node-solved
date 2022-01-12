import { IClientsRepository } from "../../repositories/IClientsRepository";
import { IOrdersRepository } from "../../repositories/IOrdersRepository";
import { IProductsRepository } from "../../repositories/IProductsRepository";
import { IOrder, Order } from "../../entities/Order";

export interface ICreateOrderRequestDTO {
   idTransacao?: string,
   idCliente: string,
   idProduto: string,
   valorCompra: number,
   qtdCompra: number,
   totalCompra: number,
   dataOrdem: Date,
}

export class CreateOrderUseCase {
   constructor(
      private ordersRepository: IOrdersRepository,
      private clientsRepository: IClientsRepository,
      private productsRepository: IProductsRepository
   ) { }
   async execute(data: ICreateOrderRequestDTO): Promise<IOrder> {
      const orderAlreadyExists = await this.ordersRepository.findByCreationDate(data.dataOrdem);
      const clientExists = await this.clientsRepository.findById(data.idCliente);
      const productExists = await this.productsRepository.findById(data.idProduto);

      if (orderAlreadyExists) {
         throw new Error(
            'Estamos processando sua ordem. Aguarde alguns segundos e tente novamente'
         );
      }

      if (!clientExists) {
         throw new Error(
            'Cliente não existente. Informe um cliente válido'
         );
      }

      if (!productExists) {
         throw new Error(
            'Produto não existente. Informe um produto válido'
         );
      }

      const order = new Order(data);

      await this.ordersRepository.save(order);

      return order;
   }
}