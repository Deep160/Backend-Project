const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch((err) => {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
    next(err); // Call the next middleware with the error
  });
export default asyncHandler;
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
