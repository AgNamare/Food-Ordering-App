import express from "express";
import { mpesaAuthToken } from "../middleware/mpesaAuthToken";
import PaymentController from "../controllers/PaymentController";

const router = express.Router();

router.get("/mpesa", mpesaAuthToken, PaymentController);

export default router;
