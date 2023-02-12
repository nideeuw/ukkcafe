const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const models = require('../models/index')
const { Op, where } = require('sequelize')
const transaksi = models.transaksi
const meja = models.meja
const detail_transaksi = models.detail_transaksi

// get all
app.get('/', async (req, res) => {
    await transaksi.findAll({
        order: [
            ["id_transaksi", "ASC"]
        ],
    })
        .then(result => {
            res.json({
                data: result
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

// get by id
app.get('/:id_transaksi', async (req, res) => {
    let param = { id_transaksi: req.params.id_transaksi }
    await transaksi.findOne({ where: param })
        .then(result => {
            res.json(result)
        }).catch(err => {
            res.json({
                message: err.message
            })
        })
})

// filtering data transaksi berdasarkan nama karyawan
app.get('/user/:id_user', (req, res) => {
    let indicator = { id_user: req.params.id_user }
    transaksi.findAll({
        where: indicator,
        order: [
            ["tgl_transaksi", "DESC"]
        ],
    })
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

// post
app.post('/', async (req, res) => {
    let current = new Date()
    let data = {
        tgl_transaksi: Date.now(),
        id_user: req.body.id_user,
        nama_pelanggan: req.body.nama_pelanggan,
        status: "belum_bayar"
    }

    const query_meja = {
        id_meja: req.body.id_meja
    }

    const resultMeja = await meja.findOne({ where: query_meja })

    if (resultMeja.status === "tidak_tersedia") {
        return res.json({ message: "Meja tidak tersedia" })
    } else {
        data.id_meja = query_meja.id_meja
        transaksi.create(data)
            .then(result => {
                console.log(result);
                let lastId = result.id_transaksi
                detail = req.body.detail_transaksi
                detail.forEach(async element => {
                    element.id_transaksi = lastId
                });
                meja.findOne({ where: query_meja })
                    .then(result => {
                        let query = {
                            status: "tidak_tersedia"
                        }
                        let param = {
                            id_meja: result.id_meja
                        }
                        meja.update(query, { where: param })
                    })
                    .catch(error => {
                        res.json({
                            message: error.message
                        });
                    });
                detail_transaksi.bulkCreate(detail)
                res.json({
                    message: "Data has been inserted"
                })
            })
            .catch(error => {
                res.json({
                    message: error.message
                })
            })
            .catch(error => {
                res.json({
                    message: error.message
                })
            })
    }
})

// filtering data transaksi berdasarkan tanggal tertentu
app.post('/tanggal', (req, res) => {
    let tgl_transaksi_awal = req.body.tgl_transaksi_awal
    let tgl_transaksi_akhir = req.body.tgl_transaksi_akhir
    transaksi.findAll({
        where: {
            tgl_transaksi: {
                [Op.between]: [tgl_transaksi_awal, tgl_transaksi_akhir]
            }
        },
        order: [
            ["tgl_transaksi", "DESC"]
        ],
    })
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

// put
app.put("/:id_transaksi", async (req, res) => {
    let param = { id_transaksi: req.params.id_transaksi };
    let date = new Date()
    let data = {
        tgl_transaksi: Date.now(),
        id_user: req.body.id_user,
        id_meja: req.body.id_meja,
        nama_pelanggan: req.body.nama_pelanggan,
        status: req.body.status
    };

    await transaksi.update(data, { where: param })
        .then(result => {
            res.json(data);
        })
        .catch((error) => {
            res.json({
                message: error.message,
            });
        });
})

// app.put("/status/:id_transaksi", async(req, res) => {
//     let param = {id_transaksi: req.params.id_transaksi};
//     let date = new Date()
//     let data = {
//         status: "lunas"
//     };

//     await transaksi.update(data, { where: param })
//     .then(async result => {
//         let parameter =  transaksi.findOne ({where: param})
//         console.log(result)
//         let booking_meja = {
//             booking : true
//         }
//         await meja.update(booking_meja, {where: parameter.id_meja})
//         res.json(data);
//     })
//     .catch((error) => {
//         res.json({
//         message: error.message,
//         });
//     });
// })

// delete
app.delete("/:id_transaksi", async (req, res) => {
    let param = { id_transaksi: req.params.id_transaksi };
    await transaksi.destroy({ where: param })
        .then(() => {
            res.json({
                message: "data has been deleted",
            });
        })
        .catch((error) => {
            res.json({
                message: error.message,
            });
        });
})

module.exports = app
