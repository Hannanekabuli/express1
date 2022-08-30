import express from "express";
import axios from "axios";
import { nanoid } from "nanoid";
const app = express()
const port = 3000

app.use(express.json())
app.use("/", express.static("client"))



app.get("/api/book", async (req, res) => {

  try {

    const axios = require("axios");

const options = {
  method: 'POST',
  url: 'https://books17.p.rapidapi.com/authors/8418015/works',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'books17.p.rapidapi.com'
  },
  data: '{"cursor":1}'
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

  } catch(err) {
    res.status(400).json(err.message)
  }
})


// Lista 
let products = [
  {
    id: nanoid(),
    bookName: "The Great Gatsby ",
    author: "(F. Scott Fitzgerald)", 
  },
  {
    id: nanoid(),
    bookName: "Narnia ",
    author: "(C. S. Lewis)"
  },
  {
    id: nanoid(),
    bookName: "The Habbit ",
    author: "(J. R. R. Tolkien)"
  }
]


app.get("/products", (req, res) => {
  
  try {
    res.json(products)
  } catch (err) {
    res.status(500).json(err.message)
  }
})

//  POST
app.post("/products", (req, res) => {
  
  try {
    if (!req.body || (!req.body.bookName || !req.body.author)) {
      throw new Error("Data was not provided correctly!")
    }

    products.push({...req.body, ...{id: nanoid()}})
    res.json({status: "New product added!"}) 

  } catch (err) {
    res.status(400).json(err.message)
  }

})


app.use((err, req, res, next) => {
  console.log(err.status)
  console.log(err.message)
  res.status(500).json(err)
})

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
})



