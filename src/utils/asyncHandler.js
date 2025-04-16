const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export {asyncHandler};

// This utility function is used to handle asynchronous errors in Express.js routes.

// const asyncHandler = (fn) => async (re, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(error.status || 500).json({
//       success: false,
//       message: error.message || "Internal Server Error",
//     });
//   }
// };
