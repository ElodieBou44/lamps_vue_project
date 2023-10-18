const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const corsOption = {
    origin: 'http://localhost:8081'
}
app.use(cors(corsOption))

// Modèle et Sequelize
const db = require('./app/models')
db.connex.sync()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true}))

require('./app/routes/product.route')(app)

// Route
const PORT = 8080
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}.`)
})