import React, {Component} from 'react';
import {Route, Switch } from 'react-router-dom'
import './App.css';
import getStarWarShips from './services/sw-api';
import StarShips from './components/StarShips/StarShips';
import StarShipInfo from './components/StarShipInfo/StarShipInfo';

class App extends Component {
  state = {
    results:[]
  }

  async componentDidMount() {
    const {results} = await getStarWarShips();
    console.log(results)
    this.setState({
      results
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">StarShips</header>
          <Switch>
            <Route exact path='/' render={() =>
              <StarShips 
                results={this.state.results}
            />
          } />
            <Route exact path='/starshipinfo/:id' render={(props) =>
              <StarShipInfo 
                {...props}
                results={this.state.results}
            />
          } />
          </Switch>
      </div>
    );
  }
}

export default App;
