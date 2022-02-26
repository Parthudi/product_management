import CategoryDataObject from "../DataObject/CategoryDataObjects";
import User from "../../users-plugin/schema/UserSchema";
import Category from "../schema/CategorySchema";
import _ from "lodash";

export default class CategoryOperator {

  static createCategory(data: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const checkUniqueCategory = await CategoryDataObject.CheckForUniqueCategory({"name": data.name}); 
        if(_.isEmpty(checkUniqueCategory)){
          const category = new Category(data);
          await category.save();
          resolve({category});
        }else{
          reject({message: "Category Already In Exist",code: 400});
        }
      }catch(error) {
        console.log("error : --- ", error);
        reject(error);
      }
    });
  }

  static categoryList(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
          const category = await Category.find({});
          resolve({category});
      }catch(error) {
        console.log("error : --- ", error);
        reject(error);
      }
    });
  }
  
  static DeleteCategory(data: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const userId = data.userId;
        const categoryId = data.categoryId;
        console.log(userId);
        console.log(categoryId);
        const userDetails = await User.findById({"_id": userId}).select("user_type");
        if(userDetails && userDetails.user_type && userDetails.user_type === "admin"){
          await Category.remove({"_id": categoryId});
          resolve({"category": `Category Removed Successful`});
        }else{
          reject({message: "You Are Not Authorized To Delete Categories, Please Contact Admin",code: 401});
        }
      }catch(error) {
        console.log("error : --- ", error);
        reject(error);
      }
    });
  }
}
