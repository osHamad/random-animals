let express = require('express')
let app = express()

app.use('/static', express.static('./static/'))
app.use('/icons', express.static('./icons/'))

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.listen(1010)