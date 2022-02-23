import * as JWT from "jsonwebtoken";
import appConfig from "../config/index";

export default class TokenHelper {
    
    static generateToken(session:string) : Promise<any> {
        return new Promise(async (resolve,reject) => {
            try {
                const token = await JWT.sign({session},appConfig.get("auth:private_key"), {expiresIn: "1h"});
                resolve({token});
            } catch(error) {
                reject(error);
            }
        });
    }

    static validateToken(token:string) : Promise<any> {
        return new Promise(async (resolve,reject) => {
            try {
                const sessionDetails = await JWT.verify(token,appConfig.get("auth:private_key"));
                resolve(sessionDetails);
            } catch(error) {
                reject(error);
            }
        });
    }

}