const router = require('express').Router();
const figuresController = require('../../controllers/figuresController');

// Matches with "/api/figures"
router
	.route('/')
	.get(figuresController.findAll)
	.post(figuresController.create);

// Matches with "/api/figures/:id"
router
	.route('/:id')
	.get(figuresController.findById)
	.put(figuresController.update)
	.delete(figuresController.remove);

module.exports = router;
