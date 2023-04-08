const { SeatModel } = require("../Models/SeatModel")


const postSeats = async (req, res) => {
    let num = req.body.number || 1
    try {
        const seats = await SeatModel.find()
        res.send(seats)
    } catch (err) {
        console.log(err)
        res.send(err.message)
    }
}
const getSeats = async () => {
    try {
        const seats = await SeatModel.find()
        res.send(seats)
    } catch (err) {
        console.log(err)
        res.send(err.message)
    }

}

module.exports = { postSeats, getSeats }