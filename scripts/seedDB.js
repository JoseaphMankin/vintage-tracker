const mongoose = require('mongoose');
const db = require('../models');

// This file empties the DB collections and inserts faux starting data

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/vintageTrackerDB', { useNewUrlParser: true });

const figureSeed = [
	{
		header: 'Artoo Detoo (R2-D2)',
		meta: 'Solid Dome',
		description: 'Star Wars 1977',
		link: 'http://www.rebelscum.com/Kenner/F-ArtooDetoo/TN/05.jpg',
		alt: 'r2d2',
		checked: false,
	},
	{
		header: 'Chewbacca',
		meta: 'Bowcaster',
		description: 'Star Wars 1977',
		link: 'http://www.rebelscum.com/Kenner/F-Chewbacca/TN/05.jpg',
		alt: 'chewbacca',
		checked: true,
	},
	{
		header: 'Luke Skywalker',
		meta: 'Yellow Lightsaber',
		description: 'Star Wars 1977',
		link: 'http://www.rebelscum.com/Kenner/F-Luke/TN/05.jpg',
		alt: 'luke',
		checked: false,
	},
	{
		header: 'Princess Leia Organa',
		meta: 'White Vinyl Cape. Blaster',
		description: 'Star Wars 1977',
		link: 'http://www.rebelscum.com/Kenner/F-Leia/TN/09.jpg',
		alt: 'leia',
		checked: true,
	},
	{
		header: 'Ben (Obi-Wan) Kenobi',
		meta: 'Vinyl Cape and Blue Lightsaber',
		description: 'Star Wars 1977',
		link: 'http://www.rebelscum.com/Kenner/F-BenKenobi/TN/09.jpg',
		alt: 'obiwan',
		checked: true,
	},
	{
		header: 'Darth Vader',
		meta: 'Black Vinyl Cape. Red Lightsaber',
		description: 'Star Wars 1977',
		link: 'http://www.rebelscum.com/Kenner/F-DarthVader/TN/21.jpg',
		alt: 'darthVader',
		checked: true,
	},
	{
		header: 'Han Solo',
		meta: 'Rebel Blaster',
		description: 'Star Wars 1977',
		link: 'http://www.rebelscum.com/Kenner/F-HanSolo/TN/17.jpg',
		alt: 'hansolo',
		checked: true,
	},
	{
		header: 'See-Threepio (C-3PO)',
		meta: '',
		description: 'Star Wars 1977',
		link: 'http://www.rebelscum.com/Kenner/F-C3PO/TN/05.jpg',
		alt: 'c3p0',
		checked: true,
	},
	{
		header: 'Stormtrooper',
		meta: 'Imperial Blaster',
		description: 'Star Wars 1977',
		link: 'http://www.rebelscum.com/Kenner/F-Stormtrooper/TN/05.jpg',
		alt: 'stormtrooper',
		checked: true,
	},
	{
		header: 'Death Squad Commander',
		meta: 'Imperial Blaster',
		description: 'Star Wars 1977',
		link: 'http://www.rebelscum.com/Kenner/F-DeathSquad/TN/05.jpg',
		alt: 'dsc',
		checked: true,
	},
	{
		header: 'Jawa',
		meta: 'Cape and Blaster',
		description: 'Star Wars 1977',
		link: 'http://www.rebelscum.com/Kenner/F-Jawa/TN/01.jpg',
		alt: 'jawa',
		checked: true,
	},
	{
		header: 'Sand People',
		meta: 'Vinyl Cape and Gaffi Stick',
		description: 'Star Wars 1977',
		link: 'http://www.rebelscum.com/Kenner/F-SandPeople/TN/05.jpg',
		alt: 'SandPeople',
		checked: true,
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
