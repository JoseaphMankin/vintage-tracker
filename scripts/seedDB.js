const mongoose = require('mongoose');
const db = require('../models');

// This file empties the DB collections and inserts faux starting data. 
// Run Node seedDB.js in terminal to reseed. (May need to drop DB first)

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/vintageTrackerDB', { useNewUrlParser: true });

const figureSeed = [
	{
		header: 'Artoo Detoo (R2-D2)',
		meta: 'Solid Dome',
		description: 'Star Wars 1977',
		link: 'http://www.rebelscum.com/Kenner/F-ArtooDetoo/TN/05.jpg',
		alt: 'r2d2',
		ownChecked: false,
		acceChecked: false
	},
	{
		header: 'Chewbacca',
		meta: 'Bowcaster',
		description: 'Star Wars 1977',
		link: 'http://www.rebelscum.com/Kenner/F-Chewbacca/TN/05.jpg',
		alt: 'chewbacca',
		ownChecked: true,
		acceChecked: false
	},
	{
		header: 'Luke Skywalker',
		meta: 'Yellow Lightsaber',
		description: 'Star Wars 1977',
		link: 'http://www.rebelscum.com/Kenner/F-Luke/TN/05.jpg',
		alt: 'luke',
		ownChecked: false,
		acceChecked: false
	},
	{
		header: 'Princess Leia Organa',
		meta: 'White Vinyl Cape. Blaster',
		description: 'Star Wars 1977',
		link: 'http://www.rebelscum.com/Kenner/F-Leia/TN/09.jpg',
		alt: 'leia',
		ownChecked: true,
		acceChecked: false
	},
	{
		header: 'Ben (Obi-Wan) Kenobi',
		meta: 'Vinyl Cape and Blue Lightsaber',
		description: 'Star Wars 1977',
		link: 'http://www.rebelscum.com/Kenner/F-BenKenobi/TN/09.jpg',
		alt: 'obiwan',
		ownChecked: true,
		acceChecked: false
	},
	{
		header: 'Darth Vader',
		meta: 'Black Vinyl Cape. Red Lightsaber',
		description: 'Star Wars 1977',
		link: 'http://www.rebelscum.com/Kenner/F-DarthVader/TN/21.jpg',
		alt: 'darthVader',
		ownChecked: true,
		acceChecked: false
	},
	{
		header: 'Han Solo',
		meta: 'Rebel Blaster',
		description: 'Star Wars 1977',
		link: 'http://www.rebelscum.com/Kenner/F-HanSolo/TN/17.jpg',
		alt: 'hansolo',
		ownChecked: true,
		acceChecked: false
	},
	{
		header: 'See-Threepio (C-3PO)',
		meta: '',
		description: 'Star Wars 1977',
		link: 'http://www.rebelscum.com/Kenner/F-C3PO/TN/05.jpg',
		alt: 'c3p0',
		ownChecked: true,
		acceChecked: false
	},
	{
		header: 'Stormtrooper',
		meta: 'Imperial Blaster',
		description: 'Star Wars 1977',
		link: 'http://www.rebelscum.com/Kenner/F-Stormtrooper/TN/05.jpg',
		alt: 'stormtrooper',
		ownChecked: true,
		acceChecked: false
	},
	{
		header: 'Death Squad Commander',
		meta: 'Imperial Blaster',
		description: 'Star Wars 1977',
		link: 'http://www.rebelscum.com/Kenner/F-DeathSquad/TN/05.jpg',
		alt: 'dsc',
		ownChecked: true,
		acceChecked: false
	},
	{
		header: 'Jawa',
		meta: 'Cape and Blaster',
		description: 'Star Wars 1977',
		link: 'http://www.rebelscum.com/Kenner/F-Jawa/TN/01.jpg',
		alt: 'jawa',
		ownChecked: true,
		acceChecked: false
	},
	{
		header: 'Sand People',
		meta: 'Vinyl Cape and Gaffi Stick',
		description: 'Star Wars 1977',
		link: 'http://www.rebelscum.com/Kenner/F-SandPeople/TN/05.jpg',
		alt: 'SandPeople',
		ownChecked: true,
		acceChecked: false
	},
];

db.Figure.remove({})
	.then(() => db.Figure.collection.insertMany(figureSeed))
	.then(data => {
		console.log(data.result.n + ' records inserted!');
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});
