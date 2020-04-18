import React, { Component } from 'react';


// Inherits:
// "onSubmit" from "App"

class SearchBar extends Component {
	state = {search: ""}
	

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state.search);
	}

	onInputChange = (e) => {
		this.setState({search: e.target.value});
	}

	render() {
		return(
			
			<div >
				<form onSubmit={this.onFormSubmit} className="ui form SearchForm">
					<div className="field" >
						<label>Image Search</label>
						<input 
							type="text" 
							value={this.state.search}
							onChange={this.onInputChange} 
						/> 
					</div>
				</form>
			</div>

		);
	}
}

export default SearchBar;
