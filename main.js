var config = require("./config")
    ,restify = require("restify");

(function(config, restify) {
    
    var server = restify.createServer();
    
    server.get("/v1/:coords", function(coords) {
        
    });
    
    server.listen(process.env.PORT || 4730, function () {
      console.log('%s listening at %s', server.name, server.url);
    });
    
})(config, restify);