const router = require('express').Router();
const bilibiliRouter = require('./bilibili');

router.use(bilibiliRouter);

module.exports = router;
