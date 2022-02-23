import express from "express";

export default class ResponseHandler {

    static sendSuccess(res: express.Response, data: any, code: number = 200) {
        res.status(code || 200).send({ success: true, data: data, requestId: res.locals.request_id, code: 200 });
    }

    static sendError(res: express.Response, error: any) {
        error && error.code ? ResponseHandler.sendSuccessError(res, error) : ResponseHandler.sendServerError(res, error);
    }

    private static sendSuccessError(res: express.Response, error: any) {
        res.status(error.code).send({ success: false, code: error.code, message: error.message, requestId: "12345" });
    }

    private static sendServerError(res: express.Response, error: any) {
        res.status(500).send({ success: false, code: 500, message: "Internal server Error", requestId: "123456" });
    }
}