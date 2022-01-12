import { IProductsRepository } from "../../repositories/IProductsRepository";
import { IProduct, Product } from "../../entities/Product";


export interface ICreateProductRequestDTO {
   idProduct?: string,
   nome: string,
   ativo: boolean,
}

export class CreateProductUseCase {
   constructor(
      private productsRepository: IProductsRepository
   ) {}

   async execute(data: ICreateProductRequestDTO): Promise<IProduct> {
      const productAlreadyExists = await this.productsRepository.findByName(data.nome);

      if(productAlreadyExists) {
         throw new Error('Produto já existente.');
      }

      const product = new Product(data);

      await this.productsRepository.save(product);

      return product;
   }
}