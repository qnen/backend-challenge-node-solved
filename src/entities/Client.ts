import { Schema, model, Model, Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";

interface IClient extends Document {
   idCliente: string,
   nome: string,
   cpf: string,
   dtNascimento: Date,
   ativo: boolean,
}

const ClientSchema = new Schema({
   idCliente: {
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
   cpf: {
      type: String,
      require: true,
   },
   dtNascimento: {
      type: Date,
      require: true,
   },
   ativo: {
      type: Boolean,
      default: true,
   },
}, 
{versionKey: false});

const Client: Model<IClient> = model<IClient>('Client', ClientSchema);

export { Client, IClient };