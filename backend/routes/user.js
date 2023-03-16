const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const md5 = require('md5')
const auth = require('../auth')
const jwt = require('jsonwebtoken')
const SECRET_KEY = "Cafe"

const models = require('../models/index')
const user = models.user

// get all
app.get('/', auth('admin'), async (req, res) => {
    await user.findAll({
        order: [
            ["id_user", "ASC"]
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
app.get('/:id_user', auth('admin'), async (req, res) => {
    let param = { id_user: req.params.id_user }
    await user.findOne({ where: param })
        .then(result => {
            res.json(result)
        }).catch(err => {
            res.json({
                message: err.message
            })
        })
})

// post
app.post('/', auth('admin'), async (req, res) => {
    let data = {
        nama_user: req.body.nama_user,
        role: req.body.role,
        username: req.body.username,
        password: md5(req.body.password)
    }

    const result = await user.findOne({ where: { username: req.body.username } })
    if (result) {
        return res.json({ message: "Username has been used" })
    } else {
        await user.create(data)
            .then(result => {
                res.json({ success: true, data: result })

            }).catch(error => {
                console.log(error);
                res.json({
                    message: error.message
                })
            })
    }

})

// login
app.post('/login', async (req, res) => {
    let data = {
        username: req.body.username,
        password: md5(req.body.password)
    }

    let result = await user.findOne({ where: data })
    if (result) {
        let payload = JSON.stringify(result)
        // generate token
        let token = jwt.sign(payload, SECRET_KEY)
        res.json({
            logged: true,
            data: result,
            nama_user: result.nama_user,
            role: result.role,
            token: token
        })
    } else {
        res.json({
            logged: false,
            message: "Invalid username or password"
        })
    }
})

// put
app.put("/:id_user", auth('admin'), async (req, res) => {
    let param = { id_user: req.params.id_user };
    let data = {
        nama_user: req.body.nama_user,
        role: req.body.role,
        username: req.body.username,
        password: md5(req.body.password)
    };

    await user.update(data, { where: param })
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
app.delete("/:id_user", auth('admin'), async (req, res) => {
    let param = { id_user: req.params.id_user };
    await user.destroy({ where: param })
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
