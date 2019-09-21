import React from 'react';
import './header.css';

const Header = (props) => {
	return (
		<h1 className="headerTop">
			Vintage Figure Tracker
			<br />
			<div className="ui buttons">
				<button className="ui button" data-name="owned" onClick={props.onClick}>Owned</button>
				<div className="or" />
				<button className="ui positive button" data-name="all" onClick={props.onClick}>All</button>
				<div className="or" />
				<button className="ui negative button" data-name="need" onClick={props.onClick}>Need</button>
			</div>
			<br />
			<br />
		</h1>
	);
};

export default Header;
