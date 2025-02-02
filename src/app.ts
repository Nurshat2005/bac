import express from "express";
import { config } from "dotenv";
config();
export const buildServer= ()=>{
  const server =express()
  server.use(express.json())
  server.get("/",(req,res)=>{
    res.status(200).send({
      message:"Hello World !"
    })
  })
  return server
}
