import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductContoller {
   constructor(
      private createProductUseCase: CreateProductUseCase
   ) { }
   async handle(request: Request, response: Response): Promise<Response> {
      const { nome, ativo } = request.body;

      try {
         const produto = await this.createProductUseCase.execute({
            nome,
            ativo
         });
   
         return response.status(201).json(`Produto ${nome} criado com sucesso. ${produto.idProduto}`);
      } catch (err) {
         return response.status(400).json({
            message: err.message || 'Algo deu errado. =('
         })
      }
   }
}