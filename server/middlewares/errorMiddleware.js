const errorMiddleware = (error, request, response, next) => {
  let statusCode = error.statusCode || 500;
  let message = error.message || 'Internal Server Error';

  if (error.name === 'CastError') {
    statusCode = 404;
    message = 'Resource not found.';
  }

  if (error.code === 11000) {
    statusCode = 409;
    const duplicateField = Object.keys(error.keyValue || {})[0];
    message = duplicateField ? `${duplicateField} already exists.` : 'Duplicate value detected.';
  }

  if (error.name === 'ValidationError') {
    statusCode = 400;
    message = Object.values(error.errors)
      .map((validationError) => validationError.message)
      .join(' ');
  }

  if (response.headersSent) {
    return next(error);
  }

  return response.status(statusCode).json({
    success: false,
    message,
    stack: process.env.NODE_ENV === 'production' ? undefined : error.stack
  });
};

export default errorMiddleware;
