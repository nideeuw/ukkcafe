const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const models = require('../models/index')
const menu = models.menu

// get all
app.get('/', async (req, res) => {
    await menu.findAll({
        order: [
            ["id_menu", "ASC"]
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
app.get('/:id_menu', async(req,res)=>{
    let param = {id_menu: req.params.id_menu}
    await menu.findOne({where: param})
    .then(result =>{
        res.json(result)
    }).catch(err =>{
        res.json({
            message: err.message
        })
    })
})

// post
app.post('/', async(req,res)=>{
    let menus = req.body
    for(let index= 0;index <menus.length; index++){
        const element = menus[index]
        let data ={
            nama_menu:element.nama_menu,
            jenis:element.jenis,
            deskripsi:element.deskripsi,
            gambar : element.gambar,
            harga: element.harga
        }
        await menu.create(data)
         .then(result =>{
            res.json(result)
            
        }).catch(error => {
              console.log(error);
              res.json({
              message: error.message
              })
        })   
    }
})

// put
app.put("/:id_menu", async(req, res) => {
    let param = {id_menu: req.params.id_menu};
    let data = {
        nama_menu:req.body.nama_menu,
        jenis:req.body.jenis,
        deskripsi:req.body.deskripsi,
        gambar : req.body.gambar,
        harga: req.body.harga
    };

    await menu.update(data, { where: param })
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
app.delete("/:id_menu", async(req, res) => {
    let param = {id_menu: req.params.id_menu};
    await menu.destroy({ where: param })
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
