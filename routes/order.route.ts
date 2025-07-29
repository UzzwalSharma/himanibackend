import  express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { createCheckoutSession, getOrders, stripeWebhook } from "../controller/order.controller";
import { asyncHandler } from "../utils/asyncHandler";

const router=express.Router();
router.get("/",isAuthenticated,asyncHandler(getOrders));
router.post("/checkout/create-checkout-session",isAuthenticated,asyncHandler(createCheckoutSession));
router.post("/webhook",express.raw({type:'application/json'}),stripeWebhook);

export default router;