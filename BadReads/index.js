const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.get('/',(req,res)=>{
    const key ={'X-RapidAPI-Key':process.env.VITE_SOME_KEY}
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=Harry" +
          "&key="+ key["X-RapidAPI-Key"] +
          "&maxResults=40"
      )
      .then((response) => setData(response.data.items))
      .catch((error) => console.log(error));
})

app.listen(8000, () => console.log(`Server is running on port ${PORT}`));
