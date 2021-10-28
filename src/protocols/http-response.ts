import { stat } from "fs";

export class HttpResponse {
  readonly statusCode: number;
  readonly body: any;
  readonly message: string;
  
  constructor (statusCode: number, body: any, message: string){
    this.statusCode = statusCode;
    this.body = body;
    this.message = message;  
  }
}