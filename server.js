const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE_LOCAL;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful'))
  .catch((err) => console.log(err));

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`App running on ${port}...`);
});

// ! usecreateindex, usefindandmodify - Check for this error
