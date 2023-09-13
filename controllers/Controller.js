const detailsDb = require('../models/model');


const getData = async (req, res) => {
    let response = {};

    try {

        const allData = await detailsDb.find();
        response = {
            error: false,
            result: allData,
            message: `Data fetched successfully!`
        }
    }
    catch (err) {
        response = {
            error: true,
            message: err
        }
    }
    res.send(response);

}

const addData = async (req, res) => {

    try {

        const newdata = new detailsDb({
            id: req.body.id,
            fullname: req.body.fullname,
            age: req.body.age,
            city: req.body.city,

        });

        newdata.save(async err => {
            if (err) {
                const response = {
                    error: true,
                    message: err
                }

                res.send(response);
            }
            else {
                const response = {
                    error: false,
                    message: 'Data addedd successfully!'
                }

                res.send(response);
            }
        });
    }
    catch (err) {
        const response = {
            error: true,
            message: err
        }

        res.send(response);
    }
}

const updateData = async (req, res) => {

    try {
        const result = await detailsDb.updateOne({ id: req.params.id }, { $set: { fullname: req.body.fullname, age: req.body.age, city: req.body.city } });
        if (!result) {
            const response = {
                error: true,
                message: 'error while update!'
            }

            res.send(response);
        }
        else {
            const response = {
                error: false,
                message: 'Data updated successfully!'
            }

            res.send(response);
        }
    } catch (err) {
        const response = {
            error: true,
            message: err
        }

        res.send(response);
    }
}

const deleteData = async (req, res) => {

    try {
        const result = await detailsDb.deleteOne({ id: req.params.id });
        if (!result) {
            const response = {
                error: true,
                message: 'error while delete!'
            }

            res.send(response);
        }
        else {
            const response = {
                error: false,
                message: 'Data deleted successfully!'
            }

            res.send(response);
        }
    } catch (err) {
        const response = {
            error: true,
            message: err
        }

        res.send(response);
    }
}

module.exports = {
    getData,
    addData,
    updateData,
    deleteData
}