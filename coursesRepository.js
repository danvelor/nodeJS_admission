const {getDataJSon} = require('./data.js');

const courses = getDataJSon("courses.json");

module.exports = {
    courses 
}   