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

        // To view results in the terminal
        console.log(`============================ \nTitle: ${results.Title} \nYear: ${results.Year} \nIMDB Ratings: ${results.imdbRating} ${results.Ratings[1].Source}: ${results.Ratings[1].Value} \nCountry: ${results.Country} \nLanguage: ${results.Language} \nPlot: ${results.Plot} \nActors: ${results.Actors}\n============================`);

        // Log Bands in town to log.txt
        var logMovies = `\n============OMDB Movies============ \nTitle: ${results.Title} \nYear: ${results.Year} \n IMDB Ratings: ${results.imdbRating} ${results.Ratings[1].Source}: ${results.Ratings[1].Value} \nCountry: ${results.Country} \nLanguage: ${results.Language} \nPlot: ${results.Plot} \nActors: ${results.Actors} \n`;

        // Append Bands in Town songs to log.txt file
        fs.appendFile("log.txt", logMovies, (err) => {
            if (err) {
                return console.log(err);
            }
        });
    });
}

// Bands in Town function
function bandsInTown(artistName) {

    var bandsURL = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp";

    axios.get(bandsURL).then(response => {
        var results = response.data[0];

        // To view results in the terminal
        console.log(`============================ \nArtist name: ${artistName} \nName of the venue: ${results.venue.name} \nVenue location: ${results.venue.city}, ${results.venue.region}, ${results.venue.country} \nDate of the event: ${moment(results.datetime).format("MM-DD-YYYY")} \n ============================`);

        // Log Bands in town to log.txt
        var logBands = `\n============Bands In Town============ \nArtist name: ${artistName} \nName of the venue: ${response.data[0].venue.name} \n Venue location: ${response.data[0].venue.city}, ${response.data[0].venue.region}, ${response.data[0].venue.country}, Date of the event: ${moment(response.data[0].datetime).format("MM-DD-YYYY")} \n`

        // Append Bands in Town songs to log.txt file
        fs.appendFile("log.txt", logBands, (err) => {
            if (err) {
                return console.log(err);
            }
        });
    });
}

// Spotify function
function spotify(songName) {
    // placed the secret ID for spotify
    var spotify = new Spotify(keys.spotify);

    if (!songName) {
        songName = "The Sign";
    }

    spotify.search({
        type: "track",
        query: songName

    }, (err, data) => {

        if (err) {
            return console.log(err);

        } else if (!err) {
            var songInfo = data.tracks.items[0];

            // To view results in the terminal
            console.log(`===========================\nArtist name: ${songInfo.artists[0].name} \nSong name: ${songName}\n Preview song: ${songInfo.preview_url} \nAlbum name: ${songInfo.album.name} \n===========================`);
        }

        // Append spotify info to log.txt file
        var logSpotify = `\n============Spotify Song============ \nArtist name: ${songInfo.artists[0].name} \nSong name: ${songName} \nPreview song: ${songInfo.preview_url} \nAlbum name: ${songInfo.album.name} \n`

        // Append spotify songs to log.txt file
        fs.appendFile("log.txt", logSpotify, (err) => {
            if (err) {
                return console.log(err);
            }
        });
    });
}

// Do what it says function
function whatItSays() {
    fs.readFile("random.txt", "utf8", (err, data) => {
        if (err) {
            return console.log(err);

        } else {
            // Display all the contents of data
            console.log(data);

            var dataArr = data.split(",");
            console.log(dataArr);
        }
    });
}