const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET route from feedback table//
router.get('/', (req, res) => {
    // console.log('GET /api/feedback');
    pool.query('SELECT * from "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error getting feedback', error)
        res.sendStatus(500);
    });
})

module.exports = router;