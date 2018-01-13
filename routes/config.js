var express = require('express');
var router = express.Router();
var request = require('request');

var options = {  
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': '*'
    }
};

router.get('/', function(req, res, next) {
    request(options, function(err, output, body) {  
      var json = JSON.parse(body);
      console.log(json); // Logging the output within the request function
      res.json(json) //then returning the response.. The request.json is empty over here
    }); //closing the request function
});

// Global variables
  // Request path module for relative path
    const path = require('path')
  // Request File System Module
   var fs = require('fs');


// GET request for the /list_user page.
router.get('/listUsers', function (req, res) {
   console.log("Got a GET request for list of users");

     // Create a relative path URL
    let reqPath = path.join(__dirname, '../mock/users.json');

    //Read JSON from relative path of this file
    fs.readFile(reqPath , 'utf8', function (err, data) {
        //Handle Error
       if(!err) {
         //Handle Success
          console.log("Success"+data);
         // Parse Data to JSON OR
          var jsonObj = JSON.parse(data)
         //Send back as Response
          res.end( data );
        }else {
           //Handle Error
           res.end("Error: "+err )
        }
   });
})

module.exports = router;
