import express from "express"
import dotenv from "dotenv"
import products from "./data/products.js"

dotenv.config()
const app = express()

app.get("/", (req, res) => {
  res.send("API is running")
})

app.get("/api/products", (req, res) => {
  res.json(products)
})

app.get("/api/products/:id", (req, res) => {
  const id = req.params.id
  res.json(products.find((p) => p._id === id))
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
})
