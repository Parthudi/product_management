import CategoryDataObject from "../DataObject/CategoryDataObjects";
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
}
