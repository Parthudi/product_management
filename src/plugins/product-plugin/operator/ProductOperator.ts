import Product from "../schema/ProductSchema";
import moment from "moment";
import sharp from "sharp";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

export default class UsersOperator {

  static createProduct(req: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
          const data = req.body || {};
          const param = req.params || {};
          const bufferFileData = await sharp(req["file"].buffer).resize({height:300, width:260}).png().toBuffer();
          const productData = {...data};
          productData["product_code"] = uuidv4();
          productData["image"] = bufferFileData;
          productData["price"] = Number(data.price);
          productData["owner"] = param.userId;
          productData["expiry_date"] = moment().add(10, "days").calendar(); 
          const product = new Product(productData);
          await product.save();
          resolve({"message": "Product Uploaded Successful"});
      }catch(error) {
        console.log("error : --- ", error);
        reject(error);
      }
    });
  }

  static getProduct(data: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try{
        const userId = data.productId;
        const product = await Product.findById(userId).populate("category");
        product["image"] = undefined;  // as due to this there will be huge suffs in postman api
        resolve({"Product": product});
      }catch(error) {
        reject(error);
      }
    });
  }
  
  
  static getProductByCategory(data: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try{
        const categoryId = data.categoryId;
        const products = await Product.find({}).populate("category").select("-image");
        const productsRelatedToCategory = [];
        products && products.map((product) => {
          if(product.category._id.toString() === categoryId){
            productsRelatedToCategory.push(product);
          }
        });
        resolve({"Product": productsRelatedToCategory});
      }catch(error) {
        reject(error);
      }
    });
  }
  
  static getProductBySearch(data: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try{
         // create query object to hold search value and category value
          const query = {};

          // assign search value to query.name
          if(data.search){                              
            // regex is used for pattern matching.     // i is for case small and caps both ,case insensitive
              query["name"] = {$regex: data.search, $options: "i"};

            // assign category value to query.category
            if(data.category && data.category != "All"){
                query["category"] = data.category;
            }

            // find product with query object based on 2 properties
            // search and category
            Product.find(query, (error, products) => {
                if(error) {
                    return reject(error);
                }
                resolve({"Products": products});
            }).select("-photo");
        } 
      }catch(error) {
        reject(error);
      }
    });
  }

  static getAllProduct(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try{
        const products = await Product.find().populate("category");
        resolve({"Products": products});
      }catch(error) {
        reject(error);
      }
    });
  }

  static UpdateProduct(req: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const param = req.params || {};
        const data = req.body || {};

        const productDetails = await Product.findById(param.productId).select("-image");
        if(productDetails.owner.toString() === param.userId) {
          console.log("SAME USER SO CAN UPDATE");

          const productData = {...data};
          if(req && req["file"] && req["file"].buffer) {
            const bufferFileData = await sharp(req["file"].buffer).resize({height:300, width:260}).png().toBuffer();
            productData["image"] = bufferFileData;
          }

          if(data && data.price){
            const productOriginalPrice = productDetails.price;
            const percentValue = productOriginalPrice/10;
            const maxRange = productOriginalPrice + percentValue;
            const minRange = productOriginalPrice - percentValue;

            if(minRange > data.price || data.price < maxRange){
              reject({message: "Price Cannot Be Exceed Beyond 10%, For More Details Contact Customer Care", code: 404});
            }
          }
          const product = await Product.findByIdAndUpdate(param.productId, {
              ...productData, "modified_at": new Date().toISOString()
          });
          await product.save();
          resolve("Producted Updated Successful");
        }else{
          reject({message:`Only Product Creator Can Update This Product`, code: 404});
        }
      }catch(error) {
        console.log("error : --- ", error);
        reject(error);
      }
    });
  }
  
  static DeleteProduct(data: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try{
        const productDetails = await Product.findById(data.productId).select("-image");
        if(productDetails.owner.toString() === data.userId) {
          console.log("SAME USER SO CAN UPDATE");
          await Product.find({ _id: data.productId }).remove();
          resolve("Producted Deleted Successful");
        }else{
          reject({message:`Only Product Creator Can Delete This Product`, code: 404});
        }
      }catch(error) {
        reject(error);
      }
    });
  }

  // static GetProductImage(data: any): Promise<any> {
  //   return new Promise(async (resolve, reject) => {
  //     try{
  //       const productDetails = await Product.findById(data.productId).select("image");
  //       return resolve(productDetails);
  //     }catch(error) {
  //       reject(error);
  //     }
  //   });
  // }

//   exports.photo = async(req, res, next)  => {
//     if(req.product.photo) {
//         // console.log("photu :" ,req.product.photo);
//         return res.status(201).send(req.product.photo);
//     }
//     next()
// }

}
