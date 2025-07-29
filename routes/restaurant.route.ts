import express from "express";
import { 
  createRestaurant, 
  getRestaurant, 
  getRestaurantOrder, 
  getSingleRestaurant, 
  searchRestaurant, 
  updateOrderStatus, 
  updateRestaurant 
} from "../controller/restaurant.controller";
import upload from "../middlewares/multer";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { asyncHandler } from "../utils/asyncHandler";

const router = express.Router();

// POST /api/v1/restaurant
router.post("/", isAuthenticated, upload.single("imageFile"), asyncHandler(createRestaurant));

// GET /api/v1/restaurant
router.get("/", isAuthenticated, asyncHandler(getRestaurant));

// PUT /api/v1/restaurant
router.put("/", isAuthenticated, upload.single("imageFile"), asyncHandler(updateRestaurant));

// GET /api/v1/restaurant/order
router.get("/order", isAuthenticated, asyncHandler(getRestaurantOrder));

// PUT /api/v1/restaurant/order/:orderId/status
router.put("/order/:orderId/status", isAuthenticated, asyncHandler(updateOrderStatus));

// GET /api/v1/restaurant/search/:searchText
router.get("/search/:searchText", isAuthenticated, asyncHandler(searchRestaurant));

// GET /api/v1/restaurant/:id
router.get("/:id", isAuthenticated, asyncHandler(getSingleRestaurant));

export default router;