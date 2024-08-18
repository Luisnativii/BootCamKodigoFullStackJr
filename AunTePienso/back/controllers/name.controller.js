// controllers/name.controller.js
const Name = require('../models/name.model');

exports.addName = async (req, res) => {
    const { name } = req.body;

    try {
        let existingName = await Name.findOne({ name: name });

        if (existingName) {
            existingName.count += 1;
            await existingName.save();
            res.status(200).json(existingName);
        } else {
            const newName = new Name({ name });
            await newName.save();
            res.status(201).json(newName);
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getTotalCount = async (req, res) => {
    try {
        const total = await Name.aggregate([
            { $group: { _id: null, total: { $sum: "$count" } } }
        ]);
        res.status(200).json({ total: total[0].total });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
