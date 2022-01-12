import { Schema, model, Model, Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";

interface IOrder extends Document {
   idTransacao: string,
   idCliente: string,
   idProduto: string,
   valorCompra: number,
   qtCompra: number,
   totalCompra: number,
   dataOrdem: Date,
}

const OrderSchema = new Schema({
   idTransacao: {
      type: String,
      default: uuidv4(),
      immutable: true,
      unique: true,
      index: true,
   },

   idCliente: {
      type: String,
      require: true,
      immutable: true,
      ref: 'Client',
   },

   idProduto: {
      type: String,
      require: true,
      immutable: true,
      ref: 'Product',
   },

   valorCompra: {
      type: Number,
      require: true,
   },

   qtdCompra: {
      type: Number,
      require: true,
   },

   totalCompra: {
      type: Number,
      default: true,
   },

   dataOrdem: {
      type: Date,
      require: true,
   },

},
{versionKey: false});

OrderSchema.pre('find', function (next) {
   this.populate("idCliente idProduto");
   next();
});

const Order: Model<IOrder> = model<IOrder>('Order', OrderSchema);

export { Order, IOrder };