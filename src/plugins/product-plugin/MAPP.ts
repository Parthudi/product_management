import * as express from "express";
import ProductController from "./controller/ProductController";
import ProductOperator from "./operator/ProductOperator";
import multer from "multer";

const MAPP = express.Router();

const upload = multer({
    limits: {
        fileSize: 2000000      // 2mb
    }, 
    fileFilter(req, file, callback) {
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            throw new Error("File not Supported");
        }
        callback(undefined, file);
    }
});

// Routes
MAPP.post("/:userId", upload.single("image"), ProductController.CreateProduct);
MAPP.get("/:productId", ProductController.GetProduct);
MAPP.get("/", ProductController.ProductsList);
MAPP.patch("/:productId/:userId", upload.single("image"), ProductController.UpdateProduct);
MAPP.delete("/:productId/:userId", ProductController.DeleteProduct);

// MAPP.get("/remove/:id", ProductController.details);
// MAPP.post("/logout/:id", ProductController.LogoutUser);

export default MAPP;
