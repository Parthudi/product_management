import  {Request, Response} from "express";
import CategoryOperator from "../operator/CategoryOperator";
import RequestValidator from "../lib/RequestValidator";
import ResponseHandler from "../lib/ResponseHandler";

export default class CategoryController {

  static async CreateCategory(req: Request, res: Response) {
    try{
      const data = req.body || {};
      await RequestValidator.CreateCategory(data);
      const result = await CategoryOperator.createCategory(data);
      return ResponseHandler.sendSuccess(res, result, 201);
    }catch(error){
      console.log(error);
      return ResponseHandler.sendError(res, error);
    }
  }  
  
  static async CategoryList(req: Request, res: Response) {
    try{
      const result = await CategoryOperator.categoryList();
      return ResponseHandler.sendSuccess(res, result, 201);
    }catch(error){
      console.log(error);
      return ResponseHandler.sendError(res, error);
    }
  }  
  
  static async DeleteCategory(req: Request, res: Response) {
    try{
      const data = req.params || {};
      await RequestValidator.RemoveCategory(data);
      const result = await CategoryOperator.DeleteCategory(data);
      return ResponseHandler.sendSuccess(res, result, 201);
    }catch(error){
      console.log(error);
      return ResponseHandler.sendError(res, error);
    }
  }  
}
