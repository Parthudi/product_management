import jwt from "jsonwebtoken";
import assert from "assert";

import CacheHelper from "../CacheHelper";

function loggedInUser() {
    return function (
        target: Object,
        propertyName: string,
        propertyDesciptor: PropertyDescriptor
    ): PropertyDescriptor {
        const method = propertyDesciptor.value;
        propertyDesciptor.value = async function (...args: any[]) {
            let req: any, res: any, next: any;
            try {
                if (args.length === 3) {
                    req = args[0] || {};
                    res = args[1] || {};
                    next = args[2] || {};
                } else {
                    throw { message: "Invalid Request", code: 400 };
                }

                const { "x-session-id": sessionID, "x-user-id": userID } = req.headers;
                sessionID && userID ? null : function () { throw { error: { message: "You must be logged in to access this service", code: 400 } }; }();
                const sessionDetails = await CacheHelper.shared.get(sessionID);

            } catch (err) {
                console.log(err);
                const response = { success: false, message: err.error.message || "Invalid Request", request_id: res && res.locals.request_id || "" };
                return res?.send ? res.status(err.code || 400).send(response) : response;
            }
        };
        return propertyDesciptor;
    };
}

export const LoggedInUser = loggedInUser;