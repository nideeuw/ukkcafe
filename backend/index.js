const express = require('express')
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());

// endpoint user
const user = require('./routes/user')
app.use('/user', user)

// endpoint meja
const meja = require('./routes/meja')
app.use('/meja', meja)

// endpoint menu
const menu = require('./routes/menu')
app.use('/menu', menu)

// endpoint transaksi
const transaksi = require('./routes/transaksi')
app.use('/transaksi', transaksi)

// endpoint detail_transaksi
const detail_transaksi = require('./routes/detail_transaksi')
app.use('/detail_transaksi', detail_transaksi)

const PORT = 8010
app.listen(PORT, () => 
    console.log(`Server run on port ${PORT}`)
)