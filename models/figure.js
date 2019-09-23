const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const figureSchema = new Schema({
	header: { type: String, required: true },
	meta: { type: String, required: false },
	description: { type: String, required: false },
	link: { type: String, required: false },
	alt: { type: String, required: false },
	ownChecked: { type: Boolean, default: false },
	acceChecked: { type: Boolean, default: false } 
});

const Figure = mongoose.model('Figure', figureSchema);

module.exports = Figure;
