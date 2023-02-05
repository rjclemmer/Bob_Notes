// init express
const express = require('express')

//express function as an app
const app = express()

// server or 3000
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

app.use(express.urlencoded({ extended: true}))

// listening 

app.listen(PORT, () => console.log(`Listening PORT: ${PORT} 🌵`));