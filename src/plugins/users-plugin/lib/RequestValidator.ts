import validator from "jsonschema";

export default class RequestValidator {

    static RegisterUser(body:any) {
        return new Promise((resolve,reject) => {
            const schema = {
                type:"object",
                properties: {
                    username: {type: "string"},
                    email: {type: "string"},
                    password: {type: "string"}
                },
                required: ["username","email","password"]
            };
            const result = validator.validate(body,schema);
            result.valid ? resolve(body) : reject({message: `Required fields${result.errors.map((err) => { return ` ${err.argument}`;})}`, code: 400});
        });
    }
    
    static LoginUser(body:any) {
        return new Promise((resolve,reject) => {
            const schema = {
                type:"object",
                properties: {
                    email: {type: "string"},
                    password: {type: "string"}
                },
                required: ["email","password"]
            };
            const result = validator.validate(body,schema);
            result.valid ? resolve(body) : reject({message: `Required fields${result.errors.map((err) => { return ` ${err.argument}`;})}`, code: 400});
        });
    }

    static LogoutUser(body:any) {
        return new Promise((resolve,reject) => {
            const schema = {
                type:"object",
                properties: {
                    id: {type: "string"},
                },
                required: ["id"]
            };
            const result = validator.validate(body, schema);
            result.valid ? resolve(body) : reject({message: `Required fields${result.errors.map((err) => { return ` ${err.argument}`;})}`, code: 400});
        });
    }
}

