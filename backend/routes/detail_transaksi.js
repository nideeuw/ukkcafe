const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const models = require('../models/index')
const detail_transaksi = models.detail_transaksi

// get all
app.get('/', auth('manajer', 'kasir'), async (req, res) => {
    await detail_transaksi.findAll({
        order: [
            ["id_detail_transaksi", "ASC"]
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
app.get('/:id_detail_transaksi', auth('manajer', 'kasir'), async(req,res)=>{
    let param = {id_detail_transaksi: req.params.id_detail_transaksi}
    await detail_transaksi.findOne({where: param})
    .then(result =>{
        res.json(result)
    }).catch(err =>{
        res.json({
            message: err.message
        })
    })
})

// post
app.post('/', auth('manajer', 'kasir'), async(req,res)=>{
    let data ={
        id_transaksi:req.body.id_transaksi,
        id_menu:req.body.id_menu,
        harga: req.body.harga
    }
    await detail_transaksi.create(data)
        .then(result =>{
        res.json(result)
        
    }).catch(error => {
            console.log(error);
            res.json({
            message: error.message
            })
    }) 
})

// put
app.put("/:id_detail_transaksi", auth('manajer', 'kasir'), async(req, res) => {
    let param = {id_detail_transaksi: req.params.id_detail_transaksi};
    let data = {
        id_transaksi:req.body.id_transaksi,
        id_menu:req.body.id_menu,
        harga: req.body.harga
    };

    await detail_transaksi.update(data, { where: param })
    .then(() => {
        res.json(data);
    })
    .catch((error) => {
        res.json({
        message: error.message,
        });
    });
})

// delete
app.delete("/:id_detail_transaksi", auth('manajer', 'kasir'), async(req, res) => {
    let param = {id_detail_transaksi: req.params.id_detail_transaksi};
    await detail_transaksi.destroy({ where: param })
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
