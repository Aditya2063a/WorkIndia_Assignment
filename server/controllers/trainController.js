const Train = require('../models/Train');

exports.getTrains = (req, res) => {
    res.json(Train.getAllTrains());
};

exports.addTrain = (req, res) => {
    const { train_id, source, destination, total_seats } = req.body;
    try {
        const newTrain = Train.addTrain(train_id, source, destination, total_seats);
        res.json({ message: 'Train added successfully', train: newTrain });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
