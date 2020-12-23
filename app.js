const express = require('express')

const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req,res){
    res.send('Welcome to CSI calculator');
});
app.get('/sum', function(req,res){
    var num1 = parseInt(req.query.n1);
    var num2 = parseInt(req.query.n2);
    res.send('' + num1 + " + " + num2 + "=" + (num1+num2) );
});

app.get('/sub', function(req,res){
    var num1 = parseInt(req.query.n1);
    var num2 = parseInt(req.query.n2);
    res.send('' + num1 + " - " + num2 + "=" + (num1-num2) );
});

app.get('/mul', function(req,res){
    var num1 = parseInt(req.query.n1);
    var num2 = parseInt(req.query.n2);
    res.send('' + num1 + " * " + num2 + "=" + (num1*num2)  );
});

app.get('/div', function(req,res){
    
    var num1 = parseFloat(req.query.n1);
    var num2 = parseFloat(req.query.n2);

    try {
        if(num2 != 0)
            return res.send('' + num1 + " / " + num2 + "=" + (num1/num2)  );

        return res.send("Inavlid Input");    
    } catch (error) {
        console.log("Error occurred");
        console.log(error);
    }
    
});

app.listen(3000, function(){
    console.log('App started');
});