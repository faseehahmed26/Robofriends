import React, {Component} from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';

import './App.css';
class App extends Component{
	constructor() {
		super()
		this.state = {
				robots:[],
				searchfield: ''
			}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({robots:users}));
}
onSearchChange=(event)=>{
	this.setState({ searchfield: event.target.value })
	
}
	render(){
		const { robots,searchfield }=this.state;
		const filterRobo = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	    })
	 return !robots.length ?
		<h1>LOad</h1> :
		    
		(
			<div className="tc">
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
				<CardList robots={filterRobo} />
				</Scroll>
			</div>
		);
		    
		
	}
	
}

export default App;