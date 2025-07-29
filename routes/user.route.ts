import express from "express";
import {
  checkAuth,
  forgotpassword,
  login,
  logout,
  resetPassword,
  signup,
  updateProfile,
  verifyEmail,
} from "../controller/user.controller";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { asyncHandler } from "../utils/asyncHandler";

const router = express.Router();

// Authentication routes
router.post("/signup", asyncHandler(signup));
router.post("/login", asyncHandler(login));
router.post("/logout", asyncHandler(logout));

// Email verification/password reset
router.post("/verify-email", asyncHandler(verifyEmail));
router.post("/forgot-password", asyncHandler(forgotpassword));
router.post("/reset-password/:token", asyncHandler(resetPassword));

// Protected routes
router.get("/check-auth", isAuthenticated, asyncHandler(checkAuth));
router.put("/profile/update", isAuthenticated, asyncHandler(updateProfile));

export default router;