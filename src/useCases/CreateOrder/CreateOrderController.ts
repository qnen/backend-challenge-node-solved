import { Request, Response } from "express";
import { CreateOrderUseCase } from "./CreateOrderUseCase";
import { v4 as uuidv4 } from 'uuid';

export class CreateOrderContoller {
   constructor(
      private createOrderUseCase: CreateOrderUseCase
   ) { }
   async handle(request: Request, response: Response): Promise<Response> {
      const {
         idCliente,
         idProduto,
         valorCompra,
         qtdCompra
      } = request.body;

      const idTransacao = uuidv4();
      const totalCompra = (valorCompra * qtdCompra);
      const dataOrdem = new Date();

      try {
         const ordem = await this.createOrderUseCase.execute({
            idTransacao,
            idCliente,
            idProduto,
            valorCompra,
            qtdCompra,
            totalCompra,
            dataOrdem,
         });
   
         return response.status(201).json(`Ordem criada com sucesso. ${ordem.idTransacao}`);
      } catch (err) {
         return response.status(400).json({
            message: err.message || 'Algo deu errado. =('
         })
      }
   }
}