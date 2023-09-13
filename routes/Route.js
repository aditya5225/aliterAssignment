const router = require('express').Router();
const { getData, addData, updateData, deleteData } = require('../controllers/Controller');

router.get('/getData', getData);

router.post('/add', addData);

router.put('/update/:id', updateData)

router.delete('/delete/:id', deleteData)

module.exports = router;