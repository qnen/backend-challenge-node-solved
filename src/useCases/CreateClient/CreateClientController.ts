import { Request, Response } from "express";
import { Util } from "../../infra/Utils/Util";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientContoller {
   constructor(
      private createClientUseCase: CreateClientUseCase
   ) { }
   async handle(request: Request, response: Response): Promise<Response> {
      const { nome, cpf, dtNascimento: dateToValidate, ativo } = request.body;


      try {
         const dtNascimento = new Util().validateDate(dateToValidate);
         const cliente = await this.createClientUseCase.execute({
            nome,
            cpf,
            dtNascimento,
            ativo
         });

         return response.status(201).json(`Cliente ${nome} criado com sucesso. ${cliente.idCliente}`);
      } catch (err) {
         return response.status(400).json({
            message: err.message || 'Algo deu errado. =('
         })
      }
   }
}