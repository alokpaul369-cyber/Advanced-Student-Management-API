const sendSuccess = (res, statusCode, data) => {
  return res.status(statusCode).json(data);
};

const sendError = (res, statusCode, message, error) => {
  const payload = { message };
  if (error) {
    payload.error = error;
  }
  return res.status(statusCode).json(payload);
};

module.exports = { sendSuccess, sendError };
