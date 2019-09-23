import React from 'react';
import Card from './components/Card';
import Header from './components/Header/Header';
// import figures from './figures.js';
import API from './utils/API';

class App extends React.Component {
	state = { 
				figureList: [], 
				filter: "all" 
			};

	componentDidMount() {
		this.loadFigures();
	}

	loadFigures = () => {
		API.getFigures()
			.then(res => {
				this.setState({ figureList: res.data });
				console.log(this.state.figureList);
			})
			.catch(err => console.log(err));
	};

	onChange(id) {
		this.setState(prevState => {
			const updatedFigures = prevState.figureList.map(figure => {
				if (figure._id === id && figure.ownChecked === false) {
					figure.ownChecked = true;
					API.updateFigure(id, figure.ownChecked)
				} else{
					figure.ownChecked = false;
					API.updateFigure(id, figure.ownChecked)
				}
				return figure;
			});
			return {
				figureList: updatedFigures,
			};
		});
		console.log(this.state)
	}

	handleClick(e){
		let val = e.target.dataset.name
		console.log(val)
	}

	render() {
		// console.log(figures[0].meta)
		return (
			<div>
				<Header onClick={(e) => this.handleClick(e)}/>
				<div className="ui cards">
					{this.state.figureList.map(figure => (
						<Card
							key={figure._id}
							header={figure.header}
							meta={figure.meta}
							description={figure.description}
							link={figure.link}
							alt={figure.alt}
							ownChecked={figure.ownChecked}
							acceChecked={figure.acceChecked}
							onChange={() => this.onChange(figure._id)}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default App;
