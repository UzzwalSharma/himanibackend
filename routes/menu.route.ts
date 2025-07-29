import express from "express";
import upload from "../middlewares/multer";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { asyncHandler } from "../utils/asyncHandler";
import { addMenu, editMenu } from "../controller/menu.controller";

const router = express.Router();

// POST /api/v1/menu
router.post("/", 
  isAuthenticated, 
  upload.single("image"), 
  asyncHandler(addMenu)
);

// PUT /api/v1/menu/:id
router.put("/:id", 
  isAuthenticated, 
  asyncHandler(editMenu)
);

// New endpoint specifically for image uploads
router.put("/:id/image", 
  isAuthenticated, 
  upload.single("image"), 
  asyncHandler(editMenu)
);

export default router;