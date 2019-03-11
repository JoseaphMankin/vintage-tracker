import React, { Component } from 'react';
import Card from './Card';
import figures from './figures.js'

class App extends Component {
  
	render() {
    // console.log(figures[0].meta)
		return (
			<div>
				<div className="ui cards">
        {figures.map(figure => <Card
            key = {figure.header}
						header= {figure.header}
						meta={figure.meta}
						description={figure.description}
						link={figure.link}
						alt={figure.alt}
          />)}

				</div>
			</div>
		);
	}
}

export default App;
