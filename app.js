const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

/** Middleware */
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));


/** Routing */
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
})

/** Server */
app.listen(port,() => {
    console.log(`Example app listening at http://localhost:${port}`);
})