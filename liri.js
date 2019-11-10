// set any environment variables with the .env package
var dotenv = require("dotenv").config();

// Here we will require data from fs file package
var fs = require("fs");

var keys = require("./keys.js");
var axios = require("axios");

// console.log(spotify);
// var spotify = new Spotify(keys.spotify);

var action = process.argv[2];
var userInput = process.argv[3];

// We will then create a switch-case statement (if-else would also work).
// The switch-case will direct which function gets run.
switch (action) {
    case "movie-this":
        movie();
        break;

    case "spotify-this-song":
        spotify();
        break;

    case "concert-this":
        bands();
        break;

    case "do-what-it-says":
        whatItSays();
        break;
}

var artist = "";

var bandsURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";


// axios.get(bandsURL).then(function(response) {
//     console.log("The artist you're searching for is.. " + response);

// });

function movie() {
    var omdbURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    var movieName = "";

    axios.get(omdbURL).then(function(response) {
        // console.log(response.data);

        console.log("-------------------------")
            // Title of the movie
        console.log(response.data.Title);
        // Year the movie came out.
        console.log(response.data.Year);
        // IMDB Rating of the movie.
        console.log(response.data.imdbRating);
        // Rotten Tomatoes Rating of the movie.
        // console.log(response.data)
        // Country where the movie was produced.
        console.log(response.data.Country);
        // Language of the movie.
        console.log(response.data.Language);
        // Plot of the movie.
        console.log(response.data.Plot);
        // Actors in the movie.
        console.log(response.data.Actors);
        console.log("-------------------------")
    });
}