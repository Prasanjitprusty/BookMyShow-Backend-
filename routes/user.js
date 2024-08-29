import express from "express";
import userController from "../controllers/user.js";

const router = express.Router();

//All routes are here.
console.log(userController); // Add this line to see if the import is correct

router.get("/users", userController.getAllUsers, (req, res, next) => {
  console.log("GET /users route hit");
  next();
});

router.post("/newUser", userController.createUser, (req, res, next) => {
  console.log("POST /newUser route hit");
  console.log("Request body:", req.body); // Log request body`
  next();
});

router.get("/users/single/:id", userController.getSingleUser,(req,res,next)=>{
  console.log("getSingleUser / one id hit");
  console.log("Request params:", req.params); // Log request body`
  next();
});

router.put("/users/update/:id", userController.updateUser,(req,res,next)=>{
  console.log("updateUser / one id updated");
  console.log("Request params:", req.params); // Log request body`
  next();
});

router.delete("/users/delete/:id", userController.deleteUser,(req,res,next)=>{
  console.log("deleteUser / one id is deleted");
  console.log("Request params:", req.params); // Log request body`
  next();
});

export default router;
