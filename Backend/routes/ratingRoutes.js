const express = require('express');
const { getRatings } = require('../controllers/ratingController');
const router = express.Router();

router.get('/', getRatings);

module.exports = router;
