
const app = require('express')()
const body_parser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const mongoose = require('mongoose')
const serveStatic = require('serve-static')
const PORT = process.env.PORT || 3000

app.use(body_parser.json())
app.use(cors())
app.use(helmet())
app.use(serveStatic(__dirname+"/dist"))
app.use('/members', require('./api/routes/Customer'))


/**
 * set up DB
 */
const mongodb_uri = "mongodb://heroku_4482223t:g1ka9u6ua9tte1limqufb22m2a@ds115664.mlab.com:15664/heroku_4482223t"
mongoose.connect(mongodb_uri, {useNewUrlParser: true})
.then(()=>{
    console.log('DB started...')
})
.catch((err)=>{
    console.log(`error: ${err}`)
})

 /**
  * spin up server
  */
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})