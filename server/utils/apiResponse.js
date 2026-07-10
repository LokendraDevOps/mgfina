export const sendResponse = (response, statusCode, message, data = null) => {
  return response.status(statusCode).json({
    success: true,
    message,
    data
  });
};
