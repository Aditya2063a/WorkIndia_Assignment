let bookings = [];

class Booking {
    constructor(booking_id, user_id, train_id, seat_no, booking_date) {
        this.booking_id = booking_id;
        this.user_id = user_id;
        this.train_id = train_id;
        this.seat_no = seat_no;
        this.booking_date = booking_date;
    }

    // Static method to create a new booking
    static createBooking(user_id, train_id, seat_no) {
        const booking_id = bookings.length + 1;
        const newBooking = new Booking(booking_id, user_id, train_id, seat_no, new Date());
        bookings.push(newBooking);
        return newBooking;
    }

    // Static method to retrieve all bookings
    static getAllBookings() {
        return bookings;
    }
}

module.exports = Booking;
