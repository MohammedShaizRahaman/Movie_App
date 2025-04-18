import express from 'express';
import { addadmin, adminLogin, getAdmins, getAdminById } from '../controllers/admin-controller.js';

const adminRouter = express.Router();

adminRouter.post("/signup", addadmin);
adminRouter.post("/login", adminLogin);
adminRouter.get("/", getAdmins);
adminRouter.get("/:id", getAdminById);
export default adminRouter;