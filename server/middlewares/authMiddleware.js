import jwt from 'jsonwebtoken';
import ApiError from '../utils/ApiError.js';
import Admin from '../models/Admin.js';
import { env } from '../config/env.js';

export const protect = async (request, response, next) => {
  const authHeader = request.headers.authorization;
  const tokenFromHeader = authHeader && authHeader.startsWith('Bearer ')
    ? authHeader.split(' ')[1]
    : null;
  const token = request.cookies?.token || tokenFromHeader;

  if (!token) {
    return next(new ApiError(401, 'Authentication required.'));
  }

  try {
    const decoded = jwt.verify(token, env.jwtSecret);
    const admin = await Admin.findById(decoded.id).select('-password');

    if (!admin) {
      return next(new ApiError(401, 'Invalid authentication token.'));
    }

    request.user = admin;
    return next();
  } catch {
    return next(new ApiError(401, 'Invalid or expired authentication token.'));
  }
};

export const authorizeRoles = (...allowedRoles) => {
  return (request, response, next) => {
    if (!request.user) {
      return next(new ApiError(401, 'Authentication required.'));
    }

    if (!allowedRoles.includes(request.user.role)) {
      return next(new ApiError(403, 'You do not have access to this resource.'));
    }

    return next();
  };
};
