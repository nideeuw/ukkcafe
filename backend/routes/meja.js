const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const models = require('../models/index')
const meja = models.meja

// get all
app.get('/', async (req, res) => {
    await meja.findAll({
        order: [
            ["id_meja", "ASC"]
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
app.get('/:id_meja', async(req,res)=>{
    let param = {id_meja: req.params.id_meja}
    await meja.findOne({where: param})
    .then(result =>{
        res.json(result)
    }).catch(err =>{
        res.json({
            message: err.message
        })
    })
})

app.get('/')

// post
app.post('/', async(req,res)=>{
    let mejas = req.body
    for(let index= 0;index <mejas.length; index++){
        const element = mejas[index]
        let data ={
            nomor_meja:element.nomor_meja,
            status: "tersedia"
        }
        await meja.create(data)
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
app.put("/:id_meja", async(req, res) => {
    let param = {id_meja: req.params.id_meja};
    let data = {
        nomor_meja:req.body.nomor_meja
    };

    await meja.update(data, { where: param })
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
app.delete("/:id_meja", async(req, res) => {
    let param = {id_meja: req.params.id_meja};
    await meja.destroy({ where: param })
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
