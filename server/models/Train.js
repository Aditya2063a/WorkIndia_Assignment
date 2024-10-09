let trainsData = {};

class Train {
    constructor(train_id, source, destination, total_seats) {
        this.train_id = train_id;
        this.source = source;
        this.destination = destination;
        this.total_seats = total_seats;
        this.available_seats = total_seats;
    }

    // Method to book a seat
    bookSeat() {
        if (this.available_seats <= 0) {
            throw new Error('No seats available');
        }
        this.available_seats -= 1;
        return this.total_seats - this.available_seats;
    }

    // Static method to find a train by its ID
    static findById(train_id) {
        return trainsData[train_id];
    }

    // Static method to add a new train
    static addTrain(train_id, source, destination, total_seats) {
        if (trainsData[train_id]) {
            throw new Error('Train with this ID already exists');
        }
        const newTrain = new Train(train_id, source, destination, total_seats);
        trainsData[train_id] = newTrain;
        return newTrain;
    }

    // Static method to retrieve all trains
    static getAllTrains() {
        return trainsData;
    }
}

module.exports = Train;
