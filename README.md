# LIRI Bot

LIRI is a Language Interpretation and Recognition Interface. 

The app will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

## Installation

For the app to work the following installation needs to occur.

```bash
npm install fs
npm install axios
npm install dotenv
npm install moment
npm install node-spotify-api
npm install spotify
```
You will have to use your own spotify API keys and placed them in dotenv file in order to recieve data back.

## Usage

To test if the app is working run these commands.

```JavaScript
node liri.js movie-this '<movie name here>'
node liri.js concert-this '<artist name here>'
node liri.js spotify-this-song '<song name here>'
node liri.js do-what-it-says
```

Make sure each command has their own API calls except do-what-it-says.

Once you run each command you should check to see if log.txt has info of each command you ran.

## Technologies

NodeJS

## Contributing
Pull requests are welcome.
