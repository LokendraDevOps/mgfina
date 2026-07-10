import ApiError from '../utils/ApiError.js';

const notFoundMiddleware = (request, response, next) => {
  next(new ApiError(404, `Route not found: ${request.originalUrl}`));
};

export default notFoundMiddleware;
