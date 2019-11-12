// set any environment variables with the .env package
var dotenv = require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var spotify = require('node-spotify-api');
var fs = require("fs");
var moment = require("moment");
moment().format();

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
        console.log("-------------------------");
    });
}

function bands(artistName) {

    var artistName = action;
    var bandsURL = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp";


    axios.get(bandsURL).then(function(response) {
        console.log(response);

        console.log("-------------------------");
        // Name of the venue
        console.log("Name of the venue: " + response.data[0].venue.name);
        // Venue location
        console.log("Venue location: " + response.data[0].venue.city);
        // Date of the Event(use moment to format this as "MM/DD/YYYY")
        console.log("Date of the Event " + moment(response.data.datetime).format("MM-DD-YYYY"));
        console.log("-------------------------");
    });
}

// function spotify() {
//     // placed the secret ID for spotify
//     var spotify = new spotify(keys.spotify);
// }