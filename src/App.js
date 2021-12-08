import react, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Cardlist } from './components/card-list/card-list.components';
import { SearchBox } from './components/search-box/search-box.components';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFiedld: ''
    };
  }

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
}

handlechange = e => {
  this.setState({ searchFiedld:e.target.value})
};

render () {
  const {monsters, searchFiedld } = this.state;
  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchFiedld.toLowerCase())

  );
  return (
    
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox 
      placeholder='Search Item'
      handlechange={this.handlechange}
      />
      <Cardlist monsters={filteredMonsters}/>
    </div>
  );
}

}

export default App;
