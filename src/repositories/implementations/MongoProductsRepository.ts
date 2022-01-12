import { IProductsRepository } from "../IProductsRepository";
import { IProduct, Product } from "../../entities/Product";
import { connection } from "mongoose";
import Database from "../../infra/Database";

export class MongoProductsRepository implements IProductsRepository {
   constructor(dbPath: string) {
      new Database().createConnection(dbPath);
   }

   async findById(idProduct: string): Promise<IProduct> {
      return await Product.findOne({ idProduto: idProduct });
   }

   async findByName(name: string): Promise<IProduct> {
      return await Product.findOne({ nome: name });
   }

   async save(product: IProduct): Promise<void> {
      await Product.create(product);
   }
}