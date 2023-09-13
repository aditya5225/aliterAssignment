const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    id: {
        type: Number,
        required: [true, 'ID is required!'],
        trim: true,
        unique: true,
        validate: {
            validator: async function (value) {
                const user = await this.constructor.findOne({ id: value });
                return !user; 
            },
            message: 'Custom message: User ID must be unique.',
        },
    },
    fullname: {
        type: String,
        required: [true, 'FullName is required!'],
    },
    age: {
        type: Number,
        required: true,
        validate: {
            validator: (value) => {
                return value >= 18 && value <= 100;
            },
            message: 'Age must be between 18 and 100',
        },

    },
    city: {
        type: String,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('customer', Schema)