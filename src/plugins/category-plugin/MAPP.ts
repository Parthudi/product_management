import * as express from "express";
import CategoryController from "./controller/CategoryController";
const MAPP = express.Router();

// Routes
MAPP.post("/", CategoryController.CreateCategory);
// MAPP.get("/", ProductController.ProductsList);
// MAPP.get("/read/:id", ProductController.Product);
// MAPP.get("/remove/:id", ProductController.details);

// MAPP.post("/logout/:id", ProductController.LogoutUser);

// MAPP.put("/", ProductController.update);
// MAPP.put("/:id", ProductController.update);

export default MAPP;
