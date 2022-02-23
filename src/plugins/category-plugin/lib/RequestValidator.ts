import validator from "jsonschema";

export default class RequestValidator {

    static CreateCategory(body:any) {
        return new Promise((resolve,reject) => {
            const schema = {
                type:"object",
                properties: {
                    name: {type: "string"}
                },
                required: ["name"]
            };
            const result = validator.validate(body,schema);
            result.valid ? resolve(body) : reject({message: `Required fields${result.errors.map((err) => { return ` ${err.argument}`;})}`, code: 400});
        });
    }
}

