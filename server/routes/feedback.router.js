const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET route from feedback table//
router.get('/', (req, res) => {
    // console.log('GET /api/feedback');
    pool.query('SELECT * from "feedback";')
        .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error getting feedback', error)
        res.sendStatus(500);
    });
})

router.post('/', (req, res) => {

    let feedback = (req.body)

    console.log('in router.POST', feedback);

    let queryText = (`INSERT INTO "feedback" ("feeling", "understanding", "supported", "comments")
    VALUES($1, $2, $3, $4)`)
    pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.supported, feedback.comments])
    .then ((response) => {
        console.log('POST to DB is:', response);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('Error POSTing', queryText, 'error:', error);
        res.sendStatus(500);
    })
}) 

module.exports = router;