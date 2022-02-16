//https://www.bundesliga.com/en/bundesliga/table
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const tableRouter = require("./routes/table");

const app = express();
const port = process.env.PORT || 6001;

app.use(cors());
app.use(express.json());

app.use("/table", tableRouter);

app.listen({ port }, () => {
  console.log(`Server is running on ${port}`);
});
