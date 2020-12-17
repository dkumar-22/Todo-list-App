const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine','ejs');

var date = new Date();

var option = {
    
}
app.get('/', (req, res) => {
    
    res.render('home', {name:day}); 
});

app.listen(3000, () => {
    console.log('Server is up and running ');
});