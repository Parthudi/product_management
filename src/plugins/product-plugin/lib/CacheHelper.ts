// import * as redis from "redis";
// import { promises } from "dns";

// export default class CacheHelper {
//     static shared: CacheHelper;
//     redis_client: redis.RedisClient;
//     connect() {
//         this.redis_client = redis.createClient();
//     }

//     async set(key:string, value:any): Promise<any> {
//         return new Promise(async (resolve,reject) => {
//             try {
//                 const date = new Date().setHours(new Date().getHours() + 1);
//                 const success = this.redis_client.setex(key,date,value.toString(), (error,reply) => {
//                     resolve(reply);
//                 });
//             } catch(error) {
//                 reject(error);
//             }
//         });
//     }

//     async get(key:string) : Promise<any> {
//         return new Promise(async (resolve,reject) => {
//             try {
//                 this.redis_client.get(key,(error,value) => {
//                     value ? resolve(value) : reject({error: {message: "Invalid Session", code: 400}});
//                 });
//             } catch(error) {
//                 reject(error);
//             }
//         });
//     }
// }