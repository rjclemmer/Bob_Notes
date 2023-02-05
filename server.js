// init express
const express = require('express')
const path = require("path");
//express function as an app
const app = express()

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
})




// home page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

//call for notes page
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// post notes
app.post("/api/notes")

// listening 

app.listen(PORT, () => console.log(`Listening PORT: ${PORT} 🌵`));