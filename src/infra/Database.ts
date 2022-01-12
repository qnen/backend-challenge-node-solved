import { connect } from "mongoose";

export default class Database {
   createConnection(dbPath: string): void {
      try {
         connect(dbPath);
      } catch (err) {
         console.log("Erro ao conectar no MongoDB", err);
      }
   }
}