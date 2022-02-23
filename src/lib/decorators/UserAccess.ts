import jwt from "jsonwebtoken";
import assert from "assert";

function userAccess() {
    return function (
        target: Object,
        propertyName: string,
        propertyDesciptor: PropertyDescriptor
    ): PropertyDescriptor {
        console.log(target);
        console.log(propertyName);
        console.log(propertyDesciptor);
        return propertyDesciptor;
    };
}

export const UserAccess = userAccess;