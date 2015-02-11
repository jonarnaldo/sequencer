// // Set up
var express = require('express');
var path = require('path');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var dir = path.resolve(__dirname + '/client');
var app = express();
var request = require('request');

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

// Routes
app.get('*', function(req, res, next) {
  res.sendFile(__dirname + '/client/index.html');
  res.end();
})

app.get('/places', function(req, res, next) {
  request('http://free4allapi.herokuapp.com/places', function(err, response, body) {
    var data = response.body;
    res.send(data);
  })
});

app.get('/events', function(req, res, next) {
  request('http://free4allapi.herokuapp.com/events', function(err, response, body) {
    var data = response.body;
    res.send(data);
  })
});




app.listen(app.get('port'), function(){
  console.log('listening on port:' + app.get('port'));
});

module.exports = app;

// var Sequelize = require('sequelize');
// var pg = require('pg');
// var URI = 'postgres://adpzszjlgcqplh:8mX-syPz1JmnsunWP5ntsWcvsJ@ec2-54-83-204-78.compute-1.amazonaws.com:5432/df21mspdndiplh';
// // var sequelize = new Sequelize('foobar','jonathanarnaldo','',{
// //   dialect: 'postgres',
// //   port: 5432
// // });

// // sequelize.authenticate().complete(function(err) {
// //   if (err) {
// //     console.log('Unable to connect to the database:', err);
// //   } else {
// //     console.log('Connection has been established successfully.');
// //   }
// // });

// // var user = User.build({
// //   name: 'jon',
// // })
 
// // user
// //   .save()
// //   .complete(function(err) {
// //     if (!!err) {
// //       console.log('The instance has not been saved:', err)
// //     } else {
// //       console.log('We have a persisted instance now')
// //     }
// //   })

// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });
