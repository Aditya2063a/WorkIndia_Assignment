const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../middleware/authMiddleware');
const bookingController = require('../controllers/bookingController');

router.post('/book_seat', authenticateUser, bookingController.bookSeat);
router.get('/bookings', bookingController.getBookings);

module.exports = router;
