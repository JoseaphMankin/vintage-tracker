import React from 'react';
import './header.css';

const Header = () => {
	return (
		<h1 className="headerTop">
			Vintage Figure Tracker
			<br />
			<div className="ui buttons">
				<button className="ui button">Owned</button>
				<div className="or" />
				<button className="ui positive button">All</button>
				<div className="or" />
				<button className="ui negative button">Need</button>
			</div>
			<br />
			<br />
		</h1>
	);
};

export default Header;
