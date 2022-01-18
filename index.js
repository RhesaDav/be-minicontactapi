const express = require('express')
const contact = require('./controller/contact')
const port = 3100
const cors = require('cors')
const bodyParser = require('body-parser')

// 3 jam 42 menit. last video https://drive.google.com/file/d/1u8bzx4DXDPsfzJLK2xSJVGnnwsQjoZ8y/view (axios)

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/api', contact)
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(port,  function() {
    console.log(`server aktif di http://localhost:${port}`)
})
