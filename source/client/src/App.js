import React, {Component} from 'react';
import _ from 'lodash';

import './App.scss';

import UserInput from './components/UserInput/UserInput.js';
import Validation from './components/Validation/Validation.js';
import Char from './components/Char/Char.js';


class App extends Component {
	state = {
		content: 'edit me',
	}

	changeContentHandler = (event) => {
		const content_new = event.target.value;
		const state_copy = _.cloneDeep(this.state);
		state_copy.content = content_new;
		this.setState(state_copy);
	}

	deleteCharHandler = (index) => {
		const state_copy = _.cloneDeep(this.state);
		let content_array = state_copy.content.split('');
		content_array.splice(index, 1);
		const content_new = content_array.join('');
		state_copy.content = content_new;
		this.setState(state_copy);
	}

	renderChars(string) {
		const chars = string.split('');
		const chars_rendered = chars.map((char, index) => {
			return (
				<Char
					char={char}
					onClick={this.deleteCharHandler.bind(this, index)}
				/>
			);
		});
		return React.createElement('div', null, chars_rendered);
	}

	render() {
		return (
			<div className="App">
				<UserInput
					onChange={this.changeContentHandler}
					content={this.state.content}
				/>
				<Validation
					content={this.state.content}
				/>
				{this.renderChars(this.state.content)}
			</div>
		);
	}
}

export default App;
