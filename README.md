# LIRI Bot

LIRI is a Language Interpretation and Recognition Interface. 

The app will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.


## Technologies

NodeJS

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

## Instructions

Movie-this:

![Screenshot (63)](https://user-images.githubusercontent.com/52462582/69369389-fe8d6480-0c69-11ea-9b06-8c0c5a10795c.png)

Concert-this:

![Screenshot (64)](https://user-images.githubusercontent.com/52462582/69369411-06e59f80-0c6a-11ea-8dbd-f8cc035e1a0f.png)

Spotify-this-song:

![Screenshot (65)](https://user-images.githubusercontent.com/52462582/69369415-0baa5380-0c6a-11ea-8b71-cf939fe9e668.png)

do-what-it-says

![Screenshot (66)](https://user-images.githubusercontent.com/52462582/69369436-106f0780-0c6a-11ea-9eab-1014fbe047c4.png)

## Video Demo

To have a better glance you can check Liri.mp4 video walkthrough.

## Contributing
Pull requests are welcome.
