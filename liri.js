// set any environment variables with the .env package
var dotenv = require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require('node-spotify-api');
var fs = require("fs");
var moment = require("moment");
moment().format();

var userInput = process.argv[2];
var dataArr = process.argv.slice(3).join(" ");

switch (userInput) {
    case "movie-this":
        movie(dataArr);
        break;

    case "spotify-this-song":
        spotify(dataArr);
        break;

    case "concert-this":
        bandsInTown(dataArr);
        break;

    case "do-what-it-says":
        whatItSays(dataArr);
        break;

    default:
        console.log("Please choose one of the following commands: 'movie-this', 'spotify-this-song', 'concert-this', 'do-what-it-says'.");
}

// omdb Movie function
function movie(movieName) {

    if (!movieName) {
        movieName = "Mr. Nobody";
    }

    var omdbURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    axios.get(omdbURL).then((response) => {
        var results = response.data;

        console.log("============================");
        // Title of the movie
        console.log("Title: " + results.Title);
        // Year the movie came out.
        console.log("Year: " + results.Year);
        // IMDB Rating of the movie.
        console.log("IMDB Ratings: " + results.imdbRating);
        // Rotten Tomatoes Rating of the movie.
        console.log(results.Ratings[1].Source + ": " + results.Ratings[1].Value);
        // Country where the movie was produced.
        console.log("Country: " + results.Country);
        // Language of the movie.
        console.log("Language: " + results.Language);
        // Plot of the movie.
        console.log("Plot: " + results.Plot);
        // Actors in the movie.
        console.log("Actors: " + results.Actors);
        console.log("============================");
    });
}

// Bands in Town function
function bandsInTown(artistName) {

    var bandsURL = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp";

    axios.get(bandsURL).then(response => {
        var results = response.data[0];
        // console.log(results);

        console.log("============================");
        // Artist Name
        console.log("Artist name: " + results.artist.name);
        // Name of the venue
        console.log("Name of the venue: " + results.venue.name);
        // // Venue location
        console.log("Venue location: " + results.venue.city + ", " + results.venue.region + ", " + results.venue.country);
        // // Date of the Event(use moment to format this as "MM/DD/YYYY")
        console.log("Date of the Event: " + moment(results.datetime).format("MM-DD-YYYY"));
        console.log("============================");
    });
}

// Spotify function
function spotify(songName) {
    // placed the secret ID for spotify
    var spotify = new Spotify(keys.spotify);

    spotify.search({
        type: "track",
        query: songName

    }, (err, data) => {

        if (err) {
            return console.log(err);

        } else if (!err) {
            var songInfo = data.tracks.items;

            // loop through all song tracks
            for (var i = 0; i < songInfo.length; i++) {
                // iterate though all song infos
                songInfo[i];
                console.log("============================");
                console.log("Artist name: " + songInfo[i].artists[0].name);
                console.log("Song name: " + songInfo[i].name);
                console.log("Preview song " + songInfo[i].preview_url);
                console.log("Album " + songInfo[i].album.name);
            }
        }
    });
}