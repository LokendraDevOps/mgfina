import Admin from '../models/Admin.js';
import ApiError from '../utils/ApiError.js';
import asyncHandler from '../utils/asyncHandler.js';
import { sendResponse } from '../utils/apiResponse.js';
import { generateToken } from '../utils/token.js';
import { env } from '../config/env.js';

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax'
};

const createAuthPayload = (admin) => ({
  id: admin._id,
  role: admin.role,
  name: admin.name,
  email: admin.email
});

const signAndRespond = (response, admin, statusCode, message) => {
  const token = generateToken(
    createAuthPayload(admin),
    env.jwtSecret,
    env.jwtExpire
  );

  response.cookie('token', token, cookieOptions);
  return sendResponse(response, statusCode, message, {
    token,
    admin: createAuthPayload(admin)
  });
};

export const registerAdmin = asyncHandler(async (request, response) => {
  const { name, email, password, role } = request.body;

  if (!name || !email || !password) {
    throw new ApiError(400, 'Name, email, and password are required.');
  }

  const existingAdmin = await Admin.findOne({ email: email.toLowerCase() });
  if (existingAdmin) {
    throw new ApiError(409, 'Admin already exists with this email.');
  }

  const admin = await Admin.create({
    name,
    email,
    password,
    role: role || 'admin'
  });

  return signAndRespond(response, admin, 201, 'Admin account created successfully.');
});

export const loginAdmin = asyncHandler(async (request, response) => {
  const { email, password } = request.body;

  if (!email || !password) {
    throw new ApiError(400, 'Email and password are required.');
  }

  const admin = await Admin.findOne({ email: email.toLowerCase() }).select('+password');
  if (!admin) {
    throw new ApiError(401, 'Invalid email or password.');
  }

  if (!admin.isActive) {
    throw new ApiError(403, 'This admin account is disabled.');
  }

  const isPasswordValid = await admin.comparePassword(password);
  if (!isPasswordValid) {
    throw new ApiError(401, 'Invalid email or password.');
  }

  return signAndRespond(response, admin, 200, 'Logged in successfully.');
});

export const getMe = asyncHandler(async (request, response) => {
  return sendResponse(response, 200, 'Current admin profile loaded.', {
    admin: request.user
  });
});

export const logoutAdmin = asyncHandler(async (request, response) => {
  response.clearCookie('token', cookieOptions);
  return sendResponse(response, 200, 'Logged out successfully.');
});
