// init express
const express = require('express');
const fs = require('fs');
const path = require("path");
const uuid =require("./db/uuid");
//express function as an app
const app = express();

// server or 3000
const PORT = process.env.PORT || 3000;

// middleware

//middle for json
app.use(express.json());

app.use(express.urlencoded({ extended: true}))

// middleware for using static files
app.use(express.static("public"));

// gets saved note and joins in db
app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname,"/db/db.json"));
});

// home page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

//call for notes page
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// call for wildcard
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

// post notes
app.post("/api/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const newNotes = req.body;
    newNotes.id = uuid();
    notes.push(newNotes);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes));
    res.json(notes);
});






// listening 

app.listen(PORT, () => console.log(`Listening PORT: ${PORT} 🌵`));