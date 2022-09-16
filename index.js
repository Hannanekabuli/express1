import express from 'express'
import fetch from 'node-fetch'
import { nanoid } from 'nanoid'

const app = express()
const port = 3000

app.use(express.json()) 
app.use("/", express.static("client"))


app.get("/api/phone", async (req, res) => {
  try {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json() 
    res.json(data) 
  }catch(err) {
    console.error(err)
  }
})


let productList = [
  {
    id: nanoid(),
    name: "Sumsung",
    productName: "Galaxy Book"
  },
  {
    id: nanoid(),
    name: "Apple",
    productName: "iphone x"
  },
  {
    id: nanoid(),
    name: "Huawei ",
    productName: "P30"
  }
]

app.get("/api/products", (req, res) => {
  try {
    res.json(productList)
  } catch(err) {
      console.error(err)
  }
})

app.post("/api/products", (req, res) => { 
  try { 
    productList.push({...req.body, ...{id: nanoid()}}) 
    console.log(productList)
    res.json("Ny produkt!")  
  } catch (err) {
    console.error(err)
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