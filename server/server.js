require('dotenv').config();

const express = require('express');
const cors = require('cors');
const spotifyWebApi = require('spotify-web-api-node');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true, useNewUrlParser: true }));
app.use(express.json());

app.post('/login', (req, res) => {
  const code = req.body.code
  const spotifyApi = new spotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: '24c06c22abe549bb9dcc9c8f40a0096a',
    clientSecret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
  });

  spotifyApi.authorizationCodeGrant(code).then(data => {
    res.json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expiresIn: data.body.expires_in
    })
  }).catch(() => {
    res.sendStatus(400)
  })
});
