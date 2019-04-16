const express = require('express');
const app = express()
// http://bit.ly/2Iy0z20 @ 01:52; approx
const path = require('path')

// http://bit.ly/2Iy0z20 @ 01:22; approx 
// http://bit.ly/2Iy0z20 @ 03:52; approx
app.use('/', express.static(path.join(__dirname, 'template')))
// http://bit.ly/2Iy0z20 @ 02:25; approx
app.listen(3001, _ => console.log('Listening...'))