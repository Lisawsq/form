var exp=require('express');
var bodyParser=require('body-parser');

var app=exp();
app.use(exp.static('public'));
app.use(bodyParser.urlencoded({extended:true}));


app.listen(2003,function () {
    console.log('Loading...')
})