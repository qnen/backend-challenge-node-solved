import { IProduct } from "../entities/Product";

export interface IProductsRepository {
   findById(idProduct: string): Promise<IProduct>;
   findByName(name: string): Promise<IProduct>;
   save(product: IProduct): Promise<void>;
}