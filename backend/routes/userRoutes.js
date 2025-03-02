import express from "express"
import { register } from "../controllers/user.controllers.js";
import {login} from '../controllers/user.controllers.js'
const router=express.Router()
router.route("/register").post(register)
router.route("/login").post(login)
export default router;