const express = require('express');
const router = express.Router();
const trainController = require('../controllers/trainController');

router.get('/trains', trainController.getTrains);
router.post('/add_train', trainController.addTrain);

module.exports = router;
