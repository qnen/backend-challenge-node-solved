import { MongoClientsRepository } from "../../repositories/implementations/MongoClientsRepository"
import { CreateClientUseCase, ICreateClientRequestDTO } from "./CreateClientUseCase";
import { Util } from "../../infra/Utils/Util";
import { v4 as uuidv4 } from "uuid";
import mongoose from "mongoose";
import { IClientsRepository } from "../../repositories/IClientsRepository";

describe("Criar cliente", () => {

   let mongoClientsRepository: IClientsRepository;
   let createClientUseCase: CreateClientUseCase;

   beforeAll(() => {

   })

   it("Deve ser possível criar um cliente", async () => {
      mongoClientsRepository = new MongoClientsRepository(process.env.MONGO_URI_QA);
      createClientUseCase = new CreateClientUseCase(mongoClientsRepository);

      const clientData: ICreateClientRequestDTO = {
         nome: "Test Name",
         cpf: new Util().gerarCPF(),
         dtNascimento: new Util().validateDate('01-01-1990'),
         ativo: true,
      }
      console.log()
      const client = await createClientUseCase.execute(clientData);

      expect(client).toHaveProperty("idCliente");

   })

   it("Não deve ser possível criar um cliente que já existe", async () => {
      mongoClientsRepository = new MongoClientsRepository(process.env.MONGO_URI_QA);
      createClientUseCase = new CreateClientUseCase(mongoClientsRepository);

      const clientData: ICreateClientRequestDTO = {
         idCliente: uuidv4(),
         nome: "Test Name",
         cpf: new Util().gerarCPF(),
         dtNascimento: new Util().validateDate('01-01-1990'),
         ativo: true,
      }

      await createClientUseCase.execute(clientData);

      clientData.idCliente = uuidv4();

      await expect(createClientUseCase.execute(clientData)).rejects.toEqual(
         new Error("Cliente já existente.")
      );
   })

   afterAll(() => mongoose.disconnect());
})