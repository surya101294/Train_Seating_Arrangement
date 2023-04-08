const express = require("express");
const { SeatModel } = require("../Models/SeatModel");
const { addData, postSeats, getSeats } = require("../Controller/SeatController");
const SeatRouter = express.Router()


SeatRouter.post("/",postSeats)

SeatRouter.get("/", getSeats)

SeatRouter.post("/add", addData)


module.exports = { SeatRouter }
