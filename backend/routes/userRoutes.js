import express from "express"
import { getUserProfile, logout, register, updateProfile } from "../controllers/user.controllers.js";
import {login} from '../controllers/user.controllers.js'
import isAuthenticated from "../middleware/isAuthenticated.js";
import { upload } from "../middleware/multer.js";

const router=express.Router()
router.route("/register").post(register)
router.route("/login").post(login)
router.route("/profile").get(isAuthenticated,getUserProfile)
router.route('/logout').get(logout)
router.route('/profile/update').put(isAuthenticated,updateProfile)
router.route("/profile/update").put(isAuthenticated,upload.single("profilePhoto"),updateProfile)
export default router;