const express = require('express');
const router = express.Router();
const {getAllRegNo,getRegNoById,createRegNO} = require('../controllers/RegNoController');

router.post('/createRegNO',createRegNO);
router.get('/getAllRegNo',getAllRegNo);
router.get('/getRegNoById',getRegNoById);


module.exports = router;