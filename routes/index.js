const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET movies page */

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((returnedMovies) => {
      res.render("movies", { returnedMovies });
      console.log(returnedMovies);
    })
    .catch((error) => console.log("Error while finding movies occurred"));
});
/* GET details page */

router.get("/movies/:id", (req, res, next) => {
    Movie.findById(req.params.id)
      .then((movieDetails) => {
        res.render("details", { movieDetails });
        console.log(movieDetails);
      })
      .catch((error) => console.log("Error while finding movie details occurred"));
});

module.exports = router;

