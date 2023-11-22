const { Router } = require('express');
const { getStatistics } = require('./statistics.controller')

const router = Router();

router.get('/statistic', getStatistics)

module.exports = router;