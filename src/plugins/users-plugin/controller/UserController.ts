import  {Request, Response} from "express";
import UserOperator from "../operator/UserOperator";
import RequestValidator from "../lib/RequestValidator";
import ResponseHandler from "../lib/ResponseHandler";

export default class InventoryController {

  static async RegisterUser(req: Request, res: Response) {
    try{
      const data = req.body || {};
      await RequestValidator.RegisterUser(data);
      const result = await UserOperator.createUser(data);
      return ResponseHandler.sendSuccess(res, result, 201);
    }catch(error){
      console.log(error);
      return ResponseHandler.sendError(res, error);
    }
  }

  static async LoginUser(req: Request, res: Response) {
    try{
      const data = req.body || {};
      await RequestValidator.LoginUser(data);
      const result = await UserOperator.loginUser(data);
      return ResponseHandler.sendSuccess(res, result, 201);
    }catch(error){
      console.log(error);
      return ResponseHandler.sendError(res, error);
    }
  }
  
  // static async LogoutUser(req: Request, res: Response) {
  //   try{
  //   const data = req.params || {};
  //     await RequestValidator.LogoutUser(data);
  //     const result = await UserOperator.LogoutUser(data);
  //     return ResponseHandler.sendSuccess(res, result, 201);
  //   }catch(error){
  //     console.log(error);
  //     return ResponseHandler.sendError(res, error);
  //   }
  // }
  
  // static async list(req: Request, res: Response) {
  //   try{

  //   }catch(error){
  //     console.log(error);
  //     return ;
  //   }
  // }

  // static async details(req: Request, res: Response) {
  //   try{

  //   }catch(error){
  //     console.log(error);
  //     return ;
  //   }
  // }

  // static async update(req: Request, res: Response) {
  //   try{
  //     // const data = req.body || {};
  //     // await RequestValidator.User(data);
  //     // const result = await UserOperator.createUser(data);
  //     // return ResponseHandler.sendSuccess(res, result, 201);
  //   }catch(error){
  //     console.log(error);
  //     return ;
  //   }
  // }
  
}
