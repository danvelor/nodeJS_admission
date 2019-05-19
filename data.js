const fs = require('fs');

let getDataJSon = (file) => {
    let rawdata = fs.readFileSync(file);
    let data = JSON.parse(rawdata);
    return data;
};

module.exports={
    getDataJSon
}