const mongoose = require("mongoose")

const seatSchema = mongoose.Schema({
    row: Number,
    seatNo: Number,
    availability: Boolean
})

const SeatModel = mongoose.model("seat", seatSchema)

module.exports = { SeatModel }
