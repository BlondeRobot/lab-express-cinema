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

module.exports = router;

/* GET details page */