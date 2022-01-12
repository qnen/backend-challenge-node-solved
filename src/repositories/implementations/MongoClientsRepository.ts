import { IClientsRepository } from "../IClientsRepository";
import { Client, IClient } from "../../entities/Client";
import Database from "../../infra/Database";
import { connection } from "mongoose";

export class MongoClientsRepository implements IClientsRepository {
   constructor(dbPath: string) {
      new Database().createConnection(dbPath);
   }

   async findById(idClient: string): Promise<IClient> {
      return await Client.findOne({ idCliente: idClient });
   }

   async findByCpf(cpf: string): Promise<IClient> {
      return await Client.findOne({ cpf: cpf });
   }

   async save(client: IClient): Promise<void> {
      await Client.create(client);
   }
}