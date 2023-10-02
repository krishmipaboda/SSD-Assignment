const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const UserRoutes = require("./routes/UserRoutes");
const RegRoutes = require("./routes/RegNoRoutes");
dotenv.config();

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>
  console.log(`Server successfully  started on : ${PORT}`)
);

mongoose.connect(
  process.env.DB_LINK,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) return console.error(err);
    console.log("Successfully Connected to MongoDB");
  }
);




//user routes
app.use("/user", UserRoutes);
app.use("/ReistrationCode", RegRoutes);