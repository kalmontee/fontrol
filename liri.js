// set any environment variables with the .env package
var dotenv = require("dotenv").config();
var keys = require("./keys.js");
// for bands
var moment = require("moment");
moment().format();
// for omdb
var axios = require("axios");
var spotify = require('node-spotify-api');
var fs = require("fs");

var userInput = process.argv[2];
var action = process.argv.slice(3).join(" ");

switch (action, userInput) {
    case "movie-this":
        movie(action);
        break;

    case "spotify-this-song":
        spotify(action);
        break;

    case "concert-this":
        bands(action);
        break;

    case "do-what-it-says":
        whatItSays(action);
        break;
}

function movie(movieName) {

    if (!movieName) {
        movieName = "Mr. Nobody";
    }

    var omdbURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    axios.get(omdbURL).then(function(response) {
        // console.log(response.data);
        // console.log(JSON.stringify(data[0], null, 2));

        console.log("-------------------------");
        // Title of the movie
        console.log("Title: " + response.data.Title);
        // Year the movie came out.
        console.log("Year: " + response.data.Year);
        // IMDB Rating of the movie.
        console.log("IMDB Ratings: " + response.data.imdbRating);
        // Rotten Tomatoes Rating of the movie.
        console.log(response.data.Ratings[1].Source + ": " + response.data.Ratings[1].Value);
        // Country where the movie was produced.
        console.log("Country: " + response.data.Country);
        // Language of the movie.
        console.log("Language: " + response.data.Language);
        // Plot of the movie.
        console.log("Plot: " + response.data.Plot);
        // Actors in the movie.
        console.log("Actors: " + response.data.Actors);
        console.log("-------------------------")
    });
}

// var artist = "";

function bands() {
    var bandsURL = "https://rest.bandsintown.com/artists/" + bandsName + "/events?app_id=codingbootcamp";

    moment.get(bandsURL).then(function(response) {
        console.log(response.data);

        // Name of the venue
        console.log(response.data.venue.name);
        // Venue location
        console.log(response.data.venue.country);
        // Date of the Event(use moment to format this as "MM/DD/YYYY")
        console.log(response.data.datetime);
    });
}