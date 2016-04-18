var express = require("express");
var app = express();


var fs = require("fs");
var notes = fs.readFileSync("notes.json");
var jsonNotes = JSON.parse(notes);


/* serves main page */
app.get("/", function(req, res) {
   res.sendfile('public/index.html')
});

app.get("/notes/:id", function(req, res) {
	console.log('Ansver on router with item note ', jsonNotes[req.params.id]);
	res.send(jsonNotes[req.params.id]);
});

app.get("/notes", function(req, res){ 
    console.log('static file request : ' + req.params);
    res.sendfile('notes.json');
});

/* serves all the static files */
app.get(/^(.+)$/, function(req, res){ 
    console.log('static file request : ' + req.params);
    res.sendfile( __dirname + req.params[0]); 
});
 
var port = process.env.PORT || 5000;
app.listen(port, function() {
   console.log("Listening on " + port);
});