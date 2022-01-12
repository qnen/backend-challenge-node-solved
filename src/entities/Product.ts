import { Schema, model, Model, Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";

interface IProduct extends Document {
   idProduto: string,
   nome: string,
   ativo: boolean,
}

const ProductSchema = new Schema({
   idProduto: {
      type: String,
      default: uuidv4(),
      immutable: true,
      unique: true,
      index: true,
   },
   nome: {
      type: String,
      require: true,
   },
   ativo: {
      type: Boolean,
      default: true,
   },
},
{versionKey: false});

const Product: Model<IProduct> = model<IProduct>('Product', ProductSchema);

export { Product, IProduct };