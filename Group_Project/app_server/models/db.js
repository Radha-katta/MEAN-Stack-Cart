var mongoose = require('mongoose');

var dbURI = 'mongodb+srv://rkatta:1234@cluster1-gwtl5.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(dbURI, {dbName: 'Final_Project'});

mongoose.connection.on('connected', ()=>{
    console.log("Connected Successfully"+dbURI);
});

mongoose.connection.on('error', (er)=>{
    console.log("Error Occured while connecting"+er);
});

mongoose.connection.on('disconnected', ()=>{
    console.log("Disconnected");
});