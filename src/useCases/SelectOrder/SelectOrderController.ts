import { Request, Response } from "express";
import { SelectOrderUseCase } from "./SelectOrderUseCase";

export class SelectOrderContoller {
   constructor(
      private selectOrderUseCase: SelectOrderUseCase
   ) { }
   async handle(request: Request, response: Response): Promise<Response> {
      const { idTransacao } = request.params;

      try {
         const ordem = await this.selectOrderUseCase.execute({ idTransacao });
   
         return response.status(200).json(ordem);
      } catch (err) {
         return response.status(400).json({
            message: err.message || 'Algo deu errado. =('
         })
      }
   }
}