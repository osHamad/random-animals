let express = require('express')
let app = express()

app.use(express.static('static'))

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.listen(1010)