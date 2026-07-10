import { sendResponse } from '../utils/apiResponse.js';

export const createListController = (resourceName) => {
  return (request, response) => {
    return sendResponse(response, 200, `${resourceName} endpoint is ready`, {
      items: [],
      resource: resourceName
    });
  };
};
