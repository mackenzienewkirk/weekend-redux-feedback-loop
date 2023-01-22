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
    console.log(req.body);
    const feedback = req.body;
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`, [Number(feedback.feeling),  Number(feedback.understanding), Number(feedback.support), feedback.comments]
    ).then((result) => {
        result.sendStatus(200);
    }).catch((error) => {
        console.log('Error POST /answers', error);
        res.sendStatus(500);
    });
})

module.exports = router;