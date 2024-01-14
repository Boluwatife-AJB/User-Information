const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appError');
const userRouter = require('./routes/userRoutes');

const app = express();

// Middleware
// console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

// app.get('/api/v1/form', getAllUsers);
// app.get('/api/v1/form/:id', getUser);
// app.post('/api/v1/form', createUser);
// app.patch('/api/v1/form/:id', updateUser);
// app.delete('/api/v1/form/:id', deleteUser);

// ROUTES
// const userRouter = express.Router();

app.use('/api/v1/form', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use((err, req, res, next) => {
  console.log(err.stack);

  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

module.exports = app;
