// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const routes = require("./routes");
require("dotenv").config();

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Routes
// =============================================================
app.use(routes);


// Start the API server
app.listen(PORT, function () {
    console.log(`API Server now listening on PORT ${PORT}!`);
});