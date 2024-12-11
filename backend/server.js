const express = require("express");
const dbConnect = require("./db/index");
const { PORT } = require('./config/index');
const errorHandler = require('./middlewares/errorHandler');
const cookieParser = require('cookie-parser');

const router = require('./routes/index')


const app = express();

app.use(cookieParser());

app.use(express.json());

app.use(router);

// const PORT = 5000;

dbConnect();

app.use('/storage', express.static('storage'));

app.use(errorHandler);

// app.get("/", (req, res) => {
//   console.log("server is ready");
//   res.json({ msg: "Server is ready" });
// });

app.listen(PORT, () => {
  console.log(`server/backend is listening on port: ${PORT}`);
});



// {
//   "username": "haris khan",
//   "name": "Haris Khan",
//   "email": "hariskhan@gmail.com",
//   "password": "Hariskhan123",
//   "confirmPassword": "Hariskhan123"
// }