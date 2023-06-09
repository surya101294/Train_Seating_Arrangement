const { SeatModel } = require("../Models/SeatModel")


const postSeats = async (req, res) => {
    let n = +req.body.number
    console.log(n);
    try {
        let flag = false
        const seats = await SeatModel.find()

        let batch = Infinity, pos
        for (let i = 0; i < seats.length / n; i++) {
            let ans = checkAvailablity(i, n);
            if (ans) {
                batch = i;
                break;
            }
        }

        batch == Infinity ? flag = true : pos = batch * n
// console.log(pos);
        console.log(batch, batch * n + 1);
        function checkAvailablity(t, num) {
            for (let i = t; i < t + 1; i++) {
                for (let p = (i) * num; p < (i + 1) * num; p++) {
                    if (seats[p].availability === true) {
                        return false
                    }
                }
                return true
            }
        }
        if (pos) {
            for (let i = pos; i < pos + n; i++) {
                const any = await SeatModel.findOneAndUpdate({ seatNo: seats[i].seatNo }, { availability: true })
            }
        }
        if (pos==0) {
                const any = await SeatModel.findOneAndUpdate({ seatNo: seats[pos].seatNo }, { availability: true })
        }
        !flag ? res.status(200).send({ "msg": "success", position: pos + 1 }) : res.status(400).send("Seat Not available")
    } catch (err) {
        res.send(err.message)
    }

}

const getSeats = async (req, res) => {
    try {
        const seats = await SeatModel.find()
        res.status(200).send(seats)
    } catch (err) {
        console.log(err)
        res.status(400).send(err.message)
    }

}

let arr = [
    {
        row: 1,
        seatNo: 1,
        availability: false
    },
    {
        row: 1,
        seatNo: 2,
        availability: false
    },
    {
        row: 1,
        seatNo: 3,
        availability: false
    },
    {
        row: 1,
        seatNo: 4,
        availability: false
    },
    {
        row: 1,
        seatNo: 5,
        availability: false
    },
    {
        row: 1,
        seatNo: 6,
        availability: false
    },
    {
        row: 1,
        seatNo: 7,
        availability: true
    },
    {
        row: 2,
        seatNo: 8,
        availability: false
    },
    {
        row: 2,
        seatNo: 9,
        availability: false
    },
    {
        row: 2,
        seatNo: 10,
        availability: true
    },
    {
        row: 2,
        seatNo: 11,
        availability: false
    },
    {
        row: 2,
        seatNo: 12,
        availability: false
    },
    {
        row: 2,
        seatNo: 13,
        availability: true
    },
    {
        row: 2,
        seatNo: 14,
        availability: false
    },
    {
        row: 3,
        seatNo: 15,
        availability: false
    },
    {
        row: 3,
        seatNo: 16,
        availability: false
    },
    {
        row: 3,
        seatNo: 17,
        availability: false
    },
    {
        row: 3,
        seatNo: 18,
        availability: false
    },
    {
        row: 3,
        seatNo: 19,
        availability: false
    },
    {
        row: 3,
        seatNo: 20,
        availability: false
    },
    {
        row: 3,
        seatNo: 21,
        availability: false
    },
    {
        row: 4,
        seatNo: 22,
        availability: false
    },
    {
        row: 4,
        seatNo: 23,
        availability: true
    },
    {
        row: 4,
        seatNo: 24,
        availability: true
    },
    {
        row: 4,
        seatNo: 25,
        availability: false
    },
    {
        row: 4,
        seatNo: 26,
        availability: false
    },
    {
        row: 4,
        seatNo: 27,
        availability: false
    },
    {
        row: 4,
        seatNo: 28,
        availability: false
    },
    {
        row: 5,
        seatNo: 29,
        availability: false
    },
    {
        row: 5,
        seatNo: 30,
        availability: false
    },
    {
        row: 5,
        seatNo: 31,
        availability: false
    },
    {
        row: 5,
        seatNo: 32,
        availability: false
    },
    {
        row: 5,
        seatNo: 33,
        availability: false
    },
    {
        row: 5,
        seatNo: 34,
        availability: true
    },
    {
        row: 5,
        seatNo: 35,
        availability: true
    },
    {
        row: 6,
        seatNo: 36,
        availability: false
    },
    {
        row: 6,
        seatNo: 37,
        availability: false
    },
    {
        row: 6,
        seatNo: 38,
        availability: false
    },
    {
        row: 6,
        seatNo: 39,
        availability: false
    },
    {
        row: 6,
        seatNo: 40,
        availability: false
    },
    {
        row: 6,
        seatNo: 41,
        availability: false
    },
    {
        row: 6,
        seatNo: 42,
        availability: false
    },
    {
        row: 7,
        seatNo: 43,
        availability: false
    },
    {
        row: 7,
        seatNo: 44,
        availability: false
    },
    {
        row: 7,
        seatNo: 45,
        availability: false
    },
    {
        row: 7,
        seatNo: 46,
        availability: false
    },
    {
        row: 7,
        seatNo: 47,
        availability: false
    },
    {
        row: 7,
        seatNo: 48,
        availability: false
    },
    {
        row: 7,
        seatNo: 49,
        availability: false
    },
    {
        row: 8,
        seatNo: 50,
        availability: true
    },
    {
        row: 8,
        seatNo: 51,
        availability: true
    },
    {
        row: 8,
        seatNo: 52,
        availability: true
    },
    {
        row: 8,
        seatNo: 53,
        availability: false
    },
    {
        row: 8,
        seatNo: 54,
        availability: false
    },
    {
        row: 8,
        seatNo: 55,
        availability: false
    },
    {
        row: 8,
        seatNo: 56,
        availability: false
    },
    {
        row: 9,
        seatNo: 57,
        availability: false
    },
    {
        row: 9,
        seatNo: 58,
        availability: false
    },
    {
        row: 9,
        seatNo: 59,
        availability: false
    },
    {
        row: 9,
        seatNo: 60,
        availability: false
    },
    {
        row: 9,
        seatNo: 61,
        availability: false
    },
    {
        row: 9,
        seatNo: 62,
        availability: false
    },
    {
        row: 9,
        seatNo: 63,
        availability: false
    },
    {
        row: 10,
        seatNo: 64,
        availability: false
    },
    {
        row: 10,
        seatNo: 65,
        availability: false
    },
    {
        row: 10,
        seatNo: 66,
        availability: false
    },
    {
        row: 10,
        seatNo: 67,
        availability: false
    },
    {
        row: 10,
        seatNo: 68,
        availability: false
    },
    {
        row: 10,
        seatNo: 69,
        availability: false
    },
    {
        row: 10,
        seatNo: 70,
        availability: false
    },
    {
        row: 11,
        seatNo: 71,
        availability: false
    },
    {
        row: 11,
        seatNo: 72,
        availability: false
    },
    {
        row: 11,
        seatNo: 73,
        availability: false
    },
    {
        row: 11,
        seatNo: 74,
        availability: false
    },
    {
        row: 11,
        seatNo: 75,
        availability: false
    },
    {
        row: 11,
        seatNo: 76,
        availability: false
    },
    {
        row: 11,
        seatNo: 77,
        availability: false
    },
    {
        row: 12,
        seatNo: 78,
        availability: false
    },
    {
        row: 12,
        seatNo: 79,
        availability: false
    },
    {
        row: 12,
        seatNo: 80,
        availability: true
    }
]

const addData = async (req, res) => {
    try {
        const seats = await SeatModel.insertMany(arr)
        res.send(seats)
    } catch (err) {
        console.log(err)
        res.send(err.message)
    }
}

module.exports = { addData, postSeats, getSeats }



