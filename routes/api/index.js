const router = require('express').Router();
const figureRoutes = require('./figures');

// Figure routes
router.use('/figures', figureRoutes);

module.exports = router;
