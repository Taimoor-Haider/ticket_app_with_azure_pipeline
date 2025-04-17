export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 400 : res.statusCode;
  res.status(statusCode);
  return res.json({
    message: err.message,
    stack: process.env.ENV_MODE === "development" ? err.stack : null,
  });
};
