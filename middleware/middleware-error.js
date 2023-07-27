const errorMiddleware = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  }); // SHOW STACK IF IN DEVELOPMENT, ELSE IF IN PRODUCTION DON'T SHOW STACK
};

module.exports = errorMiddleware;
