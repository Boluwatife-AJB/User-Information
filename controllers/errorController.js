const AppError = require('./../utils/appError');

const handleCastErrorDB = (err) => {
  // console.log(err);
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

const sendErrorDev = (err, res) => {
  // console.log(`ERROR NAME: ${err.name}`);
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

// const sendErrorProd = (err, res) => {
//   // console.log(err);
//   if (err.isOperational) {
//     res.status(err.statusCode).json({
//       status: err.status,
//       message: err.message,
//     });
//   } else {
//     // 1.) Log Error to the console
//     // console.error('ERROR 💥', err);
//     res.status(500).json({
//       status: 'error',
//       message: 'Something went very wrong!',
//     });
//   }
// };

const sendErrorProd = (err, res) => {
  console.log(err);
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  // console.log(err);

  if (process.env.NODE_ENV === 'development') {
    console.log(err);
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    console.log(error);

    if (error.name === 'CastError') error = handleCastErrorDB(error);

    sendErrorProd(error, res);
  }
};
