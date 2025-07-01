/** @format */

const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Coffee Store API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
