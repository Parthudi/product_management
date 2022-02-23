import Category from "../schema/CategorySchema";

export default class CategoryDataObject {
    
    static CheckForUniqueCategory(categoryName: any): Promise<any> {
        return new Promise(async(resolve,reject) => {
           try {
                Category.find(categoryName, (err, category) => {
                    err ? resolve({}) : resolve(category);
                });
            }catch(error) {
               reject(error);
            }
        });
    }

    // static FindUserByIdAndUpdate(_id: string, updateKey: string, updateValue: any): Promise<any> {
    //     return new Promise(async(resolve,reject) => {
    //        try {
    //             const dataTobBeUpdate: any = {};
    //             dataTobBeUpdate[`${updateKey}`] = updateValue;
    //             Category.findByIdAndUpdate({_id}, dataTobBeUpdate, (err, user) => {
    //                 err ? reject({}) : resolve(user); 
    //             });
    //         }catch(error) {
    //            reject(error);
    //         }
    //     });
    // }

    // static FindOne(keyValuePair: any): Promise<any> {
    //     return new Promise(async(resolve,reject) => {
    //        try {
    //            const user = Category.findOne(keyValuePair);
    //            !user ? reject({}) : resolve(user);
    //         }catch(error) {
    //            reject(error);
    //         }
    //     });
    // }

    // static FindUserByPassword(password: string, storedPassword: string): Promise<any> {
    //     return new Promise(async(resolve,reject) => {
    //        try {
    //             const user = await bycrypt.compare(password, storedPassword);
    //            !user ? resolve(false) : resolve(user);
    //         }catch(error) {
    //            reject(error);
    //         }
    //     });
    // }

    // static HashingPassword(password: string) : Promise<any> {
    //     return new Promise(async(resolve, reject) => {
    //         try{
    //             const hashedPassword = await bycrypt.hash(password, 8);
    //             resolve(hashedPassword);
    //         }catch(error) {
    //             reject(error);
    //         }
    //     });
    // }
}