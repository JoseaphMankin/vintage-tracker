import React from 'react';
import Card from './components/Card';
import Header from './components/Header/Header';
import figures from './figures.js';
import API from './utils/API';

class App extends React.Component {
	state = { figureList: figures };

	componentDidMount() {
		this.loadFigures();
	}

	loadFigures = () => {
		API.getFigures()
			.then(res => {
				this.setState({ figureList: res.data });
				console.log(res);
			})
			.catch(err => console.log(err));
	};

	onChange(id) {
		console.log('clicked');
		this.setState(prevState => {
			const updatedFigures = prevState.figureList.map(figure => {
				console.log(id);
				if (figure.id === id) {
					figure.checked = !figure.checked;
				}
				return figure;
			});
			return {
				figureList: updatedFigures,
			};
		});
	}

	render() {
		// console.log(figures[0].meta)
		return (
			<div>
				<Header />
				<div className="ui cards">
					{figures.map(figure => (
						<Card
							key={figure.id}
							header={figure.header}
							meta={figure.meta}
							description={figure.description}
							link={figure.link}
							alt={figure.alt}
							checked={figure.checked}
							onChange={() => this.onChange(figure.id)}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default App;
