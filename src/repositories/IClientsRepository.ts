import { Response } from "express";
import { IClient } from "../entities/Client";

export interface IClientsRepository {
   findById(idClient: string): Promise<IClient>;
   findByCpf(cpf: string): Promise<IClient>;
   save(client: IClient): Promise<void>;
}