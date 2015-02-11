// var Sequelize = require('sequelize');
// var sequelize = new Sequelize('database_name', 'username', 'password', {
//   dialect: "postgres", // or 'sqlite', 'postgres', 'mariadb'
//   port:    3306, // or 5432 (for postgres)
// })
 
// sequelize.authenticate().complete(function(err) {
//   if (!!err) {
//     console.log('Unable to connect to the database:', err)
//   } else {
//     console.log('Connection has been established successfully.')
//   }
// })

// var User = sequelize.define('User', {
//   username: Sequelize.STRING,
//   password: Sequelize.STRING
// })

// sequelize.sync({ force: true }).complete(function(err) {
//   if (!!err) {
//    console.log('An error occurred while creating the table:', err)
//   } else {
//    console.log('It worked!')
//   }
// })


// // create user
// User
//   .create({
//     firstName: 'Jon',
//     lastName: 'Arnaldo'
//   })
//   .complete(function(err, user) {
//     console.log(user);
//   })