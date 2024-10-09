const Booking = require('../models/Booking');
const Train = require('../models/Train');
const { Mutex } = require('async-mutex');
const bookingMutex = new Mutex();

exports.bookSeat = async (req, res) => {
    const { train_id } = req.body;
    const user_id = req.user.id;

    // Lock the train for booking to avoid race conditions
    const unlock = await bookingMutex.lock();

    try {
        const train = Train.findById(train_id);

        if (!train) {
            return res.status(404).json({ message: 'Train not found' });
        }

        try {
            const seat_no = train.bookSeat();
            const newBooking = Booking.createBooking(user_id, train_id, seat_no);
            res.json({ message: 'Seat booked successfully', booking: newBooking });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    } finally {
        unlock(); // Unlock the mutex
    }
};

exports.getBookings = (req, res) => {
    const allBookings = Booking.getAllBookings();
    res.json(allBookings);
};
