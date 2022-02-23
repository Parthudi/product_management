import * as express from "express";
import UserController from "./controller/UserController";
const MAPP = express.Router();

// Routes

MAPP.post("/register", UserController.RegisterUser);
MAPP.post("/login", UserController.LoginUser);
// MAPP.post("/logout/:id", UserController.LogoutUser);

// MAPP.get("/", UserController.list);
// MAPP.get("/:id", UserController.details);
// MAPP.put("/", UserController.update);
// MAPP.put("/:id", UserController.update);

export default MAPP;
