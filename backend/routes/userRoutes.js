import express from "express"
import { getUserProfile, logout, register } from "../controllers/user.controllers.js";
import {login} from '../controllers/user.controllers.js'
import isAuthenticated from "../middleware/isAuthenticated.js";

const router=express.Router()
router.route("/register").post(register)
router.route("/login").post(login)
router.route('/profile').get(isAuthenticated,getUserProfile)
router.route('/logout').get(logout)
export default router;