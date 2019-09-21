import axios from 'axios';

export default {
	// Gets all figures
	getFigures: function() {
		return axios.get('/api/figures');
	},
	// Gets the figure with the given id
	getFigure: function(id) {
		return axios.get('/api/figures/' + id);
	},
	// Deletes the figure with the given id
	deleteFigure: function(id) {
		return axios.delete('/api/figures/' + id);
	},
	// Saves a figure to the database
	saveFigure: function(figureData) {
		return axios.post('/api/figures', figureData);
	},
	// Updates a figure to the database
	updateFigure: function(id, figureData) {
		return axios.put('/api/figures/' + id, figureData);
	},
};
