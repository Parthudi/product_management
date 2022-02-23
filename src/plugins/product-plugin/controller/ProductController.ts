import  {Request, Response} from "express";
import ProductOperator from "../operator/ProductOperator";
import RequestValidator from "../lib/RequestValidator";
import ResponseHandler from "../lib/ResponseHandler";

export default class InventoryController {

  static async CreateProduct(req: Request, res: Response) {
    try{
      const data = req.body || {};
      await RequestValidator.CreateProduct(data);
      const result = await ProductOperator.createProduct(req);
      return ResponseHandler.sendSuccess(res, result, 201);
    }catch(error){
      console.log(error);
      return ResponseHandler.sendError(res, error);
    }
  }

  static async GetProduct(req: Request, res: Response) {
    try{
      const data = req.params || {};
      await RequestValidator.Product(data);
      const result = await ProductOperator.getProduct(data);
      return ResponseHandler.sendSuccess(res, result, 201);
    }catch(error){
      console.log(error);
      return ResponseHandler.sendError(res, error);
    }
  }
  
  static async ProductsList(req: Request, res: Response) {
    try{
      const result = await ProductOperator.getAllProduct();
      return ResponseHandler.sendSuccess(res, result, 201);
    }catch(error){
      console.log(error);
      return ResponseHandler.sendError(res, error);
    }
  }

  static async UpdateProduct(req: Request, res: Response) {
    try{
      const data = req.params || {};
      await RequestValidator.UpdateAndDeleteProduct(data);
      const result = await ProductOperator.UpdateProduct(req);
      return ResponseHandler.sendSuccess(res, result, 201);
    }catch(error){
      console.log(error);
      return ResponseHandler.sendError(res, error);
    }
  }
  
  static async DeleteProduct(req: Request, res: Response) {
    try{
      const data = req.params || {};
      await RequestValidator.UpdateAndDeleteProduct(data);
      const result = await ProductOperator.DeleteProduct(data);
      return ResponseHandler.sendSuccess(res, result, 201);
    }catch(error){
      console.log(error);
      return ResponseHandler.sendError(res, error);
    }
  }
  // static async list(req: Request, res: Response) {
  //   try{

  //   }catch(error){
  //     console.log(error);
  //     return ;
  //   }
  // }

  // static async UpdateProduct(req: Request, res: Response) {
  //   try{
  //     // const data = req.body || {};
  //     // await RequestValidator.User(data);
  //     // const result = await ProductOperator.createUser(data);
  //     // return ResponseHandler.sendSuccess(res, result, 201);
  //   }catch(error){
  //     console.log(error);
  //     return ;
  //   }
  // }
  
}
