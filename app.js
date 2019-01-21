const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

const shopRoute = require('./routes/shop')
const adminRoute = require('./routes/admin')
const testRout = require('./routes/test')

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminRoute)
app.use(shopRoute)
app.use(testRout)


app.use('/', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'not-found.html'))
})
app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/')
})