var express = require("express");
var app = express();
var port = process.env.PORT || 5000;
app.listen(port, function() {
   console.log("Listening on " + port);
});

var bodyParser = require('body-parser')
app.use(bodyParser());

var notes = require('./notes');
notes = notes.notes;
// var fs = require("fs");
// var notes = fs.readFileSync("notes.json");
// var jsonNotes = JSON.parse(notes);


/* serves main page */
app.get("/", function(req, res) {
   res.sendfile('public/index.html')
});

app.get("/notes/:id", function(req, res) {
	var note = notes.filter(function(note) { return note.id == req.params.id; })[0];
	
	if(!note) {
        res.statusCode = 404;
        return res.json({ msg: "note does not exist" });
    }

	res.json(note);
});

app.put("/notes/:id", function(req, res) {
	var note = notes.filter(function(note) { return note.id == req.params.id; })[0];
	if(!note) {
        res.statusCode = 404;
        return res.json({ msg: "note does not exist" });
    }

    note.name = req.body.name;
    note.body = req.body.body;

    res.json(note);
});

app.get("/notes", function(req, res){ 
    // console.log('static file request : ' + req.params);
    res.json(notes);
});

/* serves all the static files */
app.get(/^(.+)$/, function(req, res){ 
    // console.log('static file request : ' + req.params);
    res.sendfile( __dirname + req.params[0]); 
});
 