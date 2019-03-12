import React from 'react';
import Card from './Card';
import figures from './figures.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        figureList:figures
    }
    // this.handleChange = this.handleChange.bind(this)
  }

  onChange(id) {
    console.log("clicked")
    this.setState(prevState => {
      const updatedFigures = prevState.figureList.map(figure => {
        console.log(id)
        if (figure.id === id){
          figure.checked = !figure.checked
        }
        return figure
      })
      return{
        figureList: updatedFigures
      }
    })
  }
  
	render() {
    // console.log(figures[0].meta)
		return (
			<div>
				<div className="ui cards">
        {figures.map(figure => <Card
            key = {figure.id}
						header= {figure.header}
						meta={figure.meta}
						description={figure.description}
						link={figure.link}
            alt={figure.alt}
            checked={figure.checked}
            onChange={() => this.onChange((figure.id))}
          />)}

				</div>
			</div>
		);
  }
}

export default App;
