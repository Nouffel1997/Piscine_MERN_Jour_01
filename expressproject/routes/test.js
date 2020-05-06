// var express = require('express');
// var router = express.Router();
// var mongo = require('mongodb').MongoClient;
// var objectId = require('mongodb').ObjectID;
// var assert = require('assert');

// var url = 'mongodb://localhost:27017/mern-pool';


// router.get('/', function(req, res, next) {
//   res.render('index');
// });
// console.log('Example app listening on port 4242!');

// router.get('/get-data', function(req, res, next) {
//   var resultArray = [];
//   mongo.connect(url, function(err, db) {
//     assert.equal(null, err);
//     var cursor = db.collection('users').find();
//     cursor.forEach(function(doc, err) {
//       assert.equal(null, err);
//       resultArray.push(doc);
//     }, function() {
//       db.close();
//       res.render('index', {items: resultArray});
//     });
//   });
// });

// router.post('/insert', function(req, res, next) {
//   var item = {
//     title: req.body.title,
//     content: req.body.content,
//     author: req.body.author
//   };

//   mongo.connect(url, function(err, db) {
//     assert.equal(null, err);
//     db.collection('users').insertOne(item, function(err, result) {
//       assert.equal(null, err);
//       console.log('Item inserted');
//       db.close();
//     });
//   });

//   res.redirect('/');
// });

// module.exports = router;







// var express = require('express');
// var router = express.Router();
// var mongo = require('mongodb').MongoClient;
// var objectId = require('mongodb').ObjectID;
// var assert = require('assert');
// const mongoose = require('mongoose');

// var url = 'mongodb://localhost:27042/mern-pool';



// var userSchema = new mongoose.Schema({
//   login: String,
//   email: String,
//   password: String,
  
// });
// var UserModel = mongoose.model('membre', userSchema);

//     router.get('/',function (req, res) {
//         res.set({
//             'Acess-control-Allow-Origin': '*'
//         });
//         res.sendFile(__dirname + '/views/index.html')
//     })
//     .post(function (req, res) {
//         //on récupére les éléments de notre form 
//         var login = req.body.login;
//         var email = req.body.email;
//         var pass = req.body.password;
        

//         // on initialise l'objet data avec les propriété
//         var userTest = new UserModel({
//             login: login,
//             email: email,
//             password: pass
//         });

//         var returnLogin = registerUser(userTest);
//         returnLogin ? res.send("registered!") : res.send("unregistered!");
//     });
// module.exports = router;
