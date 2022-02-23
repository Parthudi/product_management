import validator from "jsonschema";

export default class RequestValidator {

    static CreateProduct(body:any) {
        return new Promise((resolve,reject) => {
            const schema = {
                type:"object",
                properties: {
                    name: {type: "string"},
                    price: {type: "string"},
                    category: {type: "string"}
                },
                required: ["name","price","category"]
            };
            const result = validator.validate(body,schema);
            result.valid ? resolve(body) : reject({message: `Required fields${result.errors.map((err) => { return ` ${err.argument}`;})}`, code: 400});
        });
    }
    
    static Product(body:any) {
        return new Promise((resolve,reject) => {
            const schema = {
                type:"object",
                properties: {
                    productId: {type: "string"}
                },
                required: ["productId"]
            };
            const result = validator.validate(body,schema);
            result.valid ? resolve(body) : reject({message: `Required fields${result.errors.map((err) => { return ` ${err.argument}`;})}`, code: 400});
        });
    }

    static UpdateAndDeleteProduct(body:any) {
        return new Promise((resolve,reject) => {
            const schema = {
                type:"object",
                properties: {
                    productId: {type: "string"},
                    userId: {type: "string"},
                },
                required: ["productId","userId"]
            };
            const result = validator.validate(body, schema);
            result.valid ? resolve(body) : reject({message: `Required fields${result.errors.map((err) => { return ` ${err.argument}`;})}`, code: 400});
        });
    }
}

