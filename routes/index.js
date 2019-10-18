var express = require('express');
var router = express.Router();
var Movies = require('../models/movies')
var data = {
  // "movies": [
    // {
      name: "the fault in our stars",
      cast: "Shailene Woodley, Ansel Elgort",
      genre: "Drama/Comedy",
      description: "Hazel Grace Lancaster (Shailene Woodley), a 16-year-old cancer patient, meets and falls in love with Gus Waters (Ansel Elgort), a similarly afflicted teen from her cancer support group. Hazel feels that Gus really understands her. They both share the same acerbic wit and a love of books, especially Grace's touchstone, 'An Imperial Affliction' by Peter Van Houten. When Gus scores an invitation to meet the reclusive author, he and Hazel embark on the adventure of their brief lives.",
      id: "0"
  //   },
  //   {
  //     name: "Captain Marvel",
  //     cast: "Brie Larson, Samuel L. Jackson, Jude Law",
  //     genre: "Fantasy/Sci-fi",
  //     description: "Captain Marvel is an extraterrestrial Kree warrior who finds herself caught in the middle of an intergalactic battle between her people and the Skrulls. Living on Earth in 1995, she keeps having recurring memories of another life as U.S. Air Force pilot Carol Danvers. With help from Nick Fury, Captain Marvel tries to uncover the secrets of her past while harnessing her special superpowers to end the war with the evil Skrulls.",
  //     id: "1"
  //   },
  //   {
  //     name: "Shutter Island",
  //     cast: "Leonardo DiCaprio, Mark Ruffalo",
  //     genre: "Mystery/Thriller",
  //     description: "The implausible escape of a brilliant murderess brings U.S. Marshal Teddy Daniels (Leonardo DiCaprio) and his new partner (Mark Ruffalo) to Ashecliffe Hospital, a fortress-like insane asylum located on a remote, windswept island. ",
  //     id: "2"
  //   }
  // ]
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WLIT' , name:{fellow:"Rachita"}});
});
// router.get('/movies', function(req, res, next) {
//   res.render('movies', data); //res is response
// });

router.get('/movies', function(req, res, next) {
  // res.render('movies', data); //res is response
  // console.log('movies...........',req,res);
  Movies.find().exec((err,movies) => {
    console.log('movies...........',movies);
    res.render('viewMovies',{movies}); //sends 'movies' data to 'viewMovies' view
  })
});

router.get('/movie/add', function(req, res, next) {
    res.render('addMovie'); //sends 'movies' data to 'viewMovies' view
});

router.post('/addmovie', function(req, res, next) {
  console.log(req.body) //shows value in terminal
  var movie = new Movies({ //from top of the page, i. e variable name of model
    name : req.body.name,
    description : req.body.description,
    cast : req.body.cast,
    genre: req.body.genre
  }) 
  var promise = movie.save()    //movie.save() returns promise so promise variable used only to represent
  //await promise //if you use async function
  promise.then((movie) => {//if you use normal promise
    console.log('movie saved', movie)
  })
});

module.exports = router;

// router.get('/one',function(req,res,next)
// {
//   Movies
// })