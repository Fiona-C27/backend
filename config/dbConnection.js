const mongoose = require('mongoose');

function dbConnection(){
    mongoose.connect('mongodb+srv://fionaprapti2023:fiona1996@cluster0.lvoywbi.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log('Connected!'));
}
module.exports = dbConnection