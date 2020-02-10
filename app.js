var express = require('express');
var app = express();


app.set('view engine' ,'ejs');
app.use(express.static('./views'));
app.set('views', __dirname + '/views');

app.get('/login',(req , res)=>{
    res.render('login')
})

app.get('/register',(req , res)=>{
    res.render('register')
})

app.listen(3000, ()=>{
    console.log('app is running at port 3000')
});