var dotenv = require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

console.log(spotify);

var artist = "";

var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

// https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp