let request = require('request');
let apiOptions = {
    server: "http://localhost:3000"
}

const _renderRecipeList = function(req, res, responseBody){
    res.render('list-display', { recipes: responseBody });
}

const productsList = function(req, res){

    const path ='/api/products';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(requestOptions, (err, response, body) => {
        _renderRecipeList(req, res, body);
    })
}
module.exports = {productsList};