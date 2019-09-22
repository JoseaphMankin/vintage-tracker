import React from 'react';

const Card = props => {
	return (
		<div className="card" key={props._id}>
			<div className="content">
				<img className="right floated mini ui image" src={props.link} alt={props.alt} />
				<div className="header">{props.header}</div>
				<div className="meta">{props.meta}</div>
				<div className="description">{props.description}</div>
			</div>
			<div className="extra content">
				{/* <div className="ui two buttons">
						<div className="ui basic green button">Own</div>
						<div className="ui basic red button">Need</div>
					</div> */}
				<div className="ui checkbox">
					<input type="checkbox" name="owned" checked={props.checked} onChange={props.onChange}/>
					<label>Figure</label>
				</div>
				<br />
				<div className="ui checkbox">
					<input type="checkbox" name="owned" checked={props.checked} onChange={props.onChange}/>
					<label>Assessory</label>
				</div>
			</div>
		</div>
	);
};

export default Card;
