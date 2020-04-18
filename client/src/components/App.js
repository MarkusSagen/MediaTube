import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';



class App extends Component {
	onSearchSubmit(search) {
		console.log(search);
	}

	render() {
		return (
			<div className="ui container" style={{marginTop: '10px'}}>
				<SearchBar onSubmit={this.onSearchSubmit}/>
				Hello World
			</div>
		);
	}
}

export default App;
