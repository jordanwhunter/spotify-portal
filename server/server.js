const express = require('express');
const cors = require('cors');
const spotifyApi = require('spotify-web-api-node');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true, useNewUrlParser: true }));
app.use(express.json());


