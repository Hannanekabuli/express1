import express from "express";
import { nanoid } from 'nanoid';


export const router = express.Router()


const loggedIn = true

const authenticatior = (req, res, next) => {
  if(loggedIn) {
    next()
    return
  }

  throw new Error("You are not logged in...")

}

router.get("/", [authenticatior], (req, res) => {
  res.json(products)
})


router.use((err, req, res, next) => {
  console.log(err.status)
  console.log(err.message)
  res.status(500).json(err)
})


