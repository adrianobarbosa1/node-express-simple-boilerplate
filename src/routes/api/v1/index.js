const express = require('express')
const router = express.Router();

router.use('/ideas', require('./ideas.route'))
// router.use('/minions', require('./minions.route'))
// router.use('/meetings', require('./meeting.route'))

module.exports = router;