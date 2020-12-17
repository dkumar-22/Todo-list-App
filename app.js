const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','ejs');

var options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
}

var items = ['Buy Food','Cook Food','Eat Food'];
var items2 = [];
var day = new Date();
var daydate = day.toLocaleDateString('en-IN',options);

app.get('/', (req, res) => {
    
    res.render('home', {dayval:'Personal List, ' + daydate, items:items, route:'/'}); 
});

app.get('/work', (req, res) => {
    
    res.render('home', {dayval:'Worklist, ' + daydate, items:items2, route:'/work'}); 
});

app.post('/',(req,res)=> {
    items.push(req.body.additem);
    res.redirect('/');
});

app.post('/work',(req,res)=> {
    items2.push(req.body.additem);
    res.redirect('/work');
});

app.listen(3000, () => {
    console.log('Server is up and running ');
});