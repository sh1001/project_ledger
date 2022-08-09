const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200);
    res.json({ msg: 'Hi there!!! This is the Web-Service for Ledger Application.' });
})

module.exports = router;