import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	
	state = {
		data: null
	};

	componentDidMount() {
		// Test responce to server
		this.callBackendAPI()
			.then(res => this.setState({ data: res.express }));
	}

	callBackendAPI = async () => {
		const res = await fetch('/express_backend');
		const body = await res.json();

		if (res.status !== 200) {
			throw Error(body.message);
		}
		return body
	}

	
	render() {
		return(
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">
						Welcome to react
					</h1>
				</header>
				<p className="App-intro"> {this.state.data} </p>
			</div> 
		);
	}

}

export default App;





















