var express = require("express");
var bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
var mongo = require('mongodb').MongoClient;
mongoose.connect('mongodb://localhost:27042/mern-pool');
var db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function (callback) {
    console.log("connection succeeded");
})


var app = express()


app.use(bodyParser.urlencoded({
    extended: true
}));

var userSchema = new mongoose.Schema({
    login: { type: String, required: true, index: { unique: true } },
    email: {type: String, required: true, index: { unique: true }, pattern: " ^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$"} ,
    password: { type: String, required: true }

});
var UserModel = mongoose.model('membre', userSchema);





app.route('/register')
    .get(function (req, res) {

        res.sendFile(__dirname + '/index.html')
    })
    .post(function (req, res) {
        bcrypt.hash(req.body.password, 10, function (err, hash) {
            var login = req.body.login;
            var email = req.body.email;
            var pass = hash;


            var userTest = new UserModel({
                login: login,
                email: email,
                password: pass
            });


            var returnLogin = registerUser(userTest);
            returnLogin ? res.send("registered!") : res.send("unregistered!");
        });


    });



app.route('/login')
    .get(function (req, res) {

        res.sendFile(__dirname + '/login.html')
    })
    .post(function (req, res) {
        var email = req.body.email;
        var pass = req.body.password;

        var userTest = {
            "email": email,
            "password": pass
        };
        var returnLogin = loginUser(userTest);
        returnLogin ? res.send("logged!") : res.send("not logged try again!");
    });


 function loginUser(userTest) {
    return read(userTest, UserModel) != undefined;
}

function registerUser(userTest) {
    return insert(userTest);
}


function insert(a) {
    a.save(function (err, doc) {
        if (err) return console.error(err);
        console.log("Document inserted succussfully!");
    });
    return true;
}

function read(a, model) {
    return model.find(a, function (result) {
        return result;
    });
}

app.listen(4242);

console.log("Example app listening on port 4242 !"); 