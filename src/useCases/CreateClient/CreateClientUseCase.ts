import { IClientsRepository } from "../../repositories/IClientsRepository";
import { Client, IClient } from "../../entities/Client";

export interface ICreateClientRequestDTO {
   idCliente?: string,
   nome: string,
   cpf: string,
   dtNascimento: Date,
   ativo: boolean,
}

export class CreateClientUseCase {
   constructor(
      private clientsRepository: IClientsRepository
   ) {}
   async execute(data: ICreateClientRequestDTO): Promise<IClient> {
      const clientAlreadyExists = await this.clientsRepository.findByCpf(data.cpf);

      if(clientAlreadyExists) {
         throw new Error('Cliente já existente.');
      }

      const client = new Client(data);

      await this.clientsRepository.save(client);

      return client;
   }
}