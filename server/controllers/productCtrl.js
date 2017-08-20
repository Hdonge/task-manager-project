const request = require("request");
const config = require("./../../config/config.json");
let url= config.config.jsonDbUrl;
//let url = "http://localhost:3000/tasks";
module.exports = {
    get: function (req, res) {
        var products;
        var status;
        //HttpGet :: GetProducts
        request(url, function (error, response, body) {
            products = response.body;
            status = res.status(response.statusCode);
            res.send(products)
        });
    },
    getTask: function (req, res) {
        url = url+ "/" + req.params.id;
        request({
            url:url,
            method:"get",
        }, function (error, response, body) {

            if (error !== null) {
                console.log(error);
                console.log(response.statusCode);
                console.log(body);
            }
            res.status(response.statusCode);
            res.send(body);

        });

    },
    post: function (req, res) {
        request(
            {
                method: 'post',
                url: url,
                json: true,
                headers: {
                    "content-type": "application/json",
                },
                body: req.body
            }, function (error, response, body) {
                if (error !== null) {
                    console.log(error);
                    console.log(response.statusCode);
                    console.log(body)
                }
                res.status(response.statusCode);
                res.send(body);
            });
    },

    put: function (req, res) {
        url = url + "/" + req.params.id;
        request({
            url: url,
            method: "put",
            headers: {
                "content-type": "application/json",
            },
            json: true,
            body: req.body
        }, function (error, response, body) {
            if (error !== null) {
                console.log("Error: " + error);
                console.log("Response Status Code: " + response.statusCode);
                console.log("Body: " + body);
            }
            res.status(response.statusCode);
            res.send(body);
        });

    },
    delete: function (req, res) {
        url= url+"/"+req.params.id;
        request({
            url:url,
            method:"delete"
        },function(error,response,body){
                if(error!==null){
                    console.log(error);
                    console.log(response.statusCode);
                    console.log(body);
                }
                res.status(response.statusCode);
                res.send(body);
        })
    }

}
