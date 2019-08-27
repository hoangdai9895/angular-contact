// importing modules
const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
const path = require('path')

const app = express()

const route = require('./routes/route');

//body-parser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));


//connect to mongodb
mongoose.connect(`mongodb+srv://admin:buihaiyen@video-idea-hiuts.gcp.mongodb.net/contactlist?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => console.log('mongodb atlas connected')).catch(err => console.log(err))


//adding middleare
app.use(cors())

// routes
app.use('/api', route)

//static file
app.use(express.static(path.join(__dirname, 'public')))

//port
const port = 3000
    // test server
app.get('/', (req, res) => {
    res.send('foobar')
})

app.listen(port, () => {
    console.log(`Server started at port: ${port}`)
})