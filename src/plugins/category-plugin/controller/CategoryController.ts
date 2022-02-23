import  {Request, Response} from "express";
import ProductOperator from "../operator/CategoryOperator";
import RequestValidator from "../lib/RequestValidator";
import ResponseHandler from "../lib/ResponseHandler";

export default class CategoryController {

  static async CreateCategory(req: Request, res: Response) {
    try{
      const data = req.body || {};
      await RequestValidator.CreateCategory(data);
      const result = await ProductOperator.createCategory(data);
      return ResponseHandler.sendSuccess(res, result, 201);
    }catch(error){
      console.log(error);
      return ResponseHandler.sendError(res, error);
    }
  }  
}
