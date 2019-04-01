import React, {Component} from 'react';
import _ from 'lodash';

import './App.scss';

import UserInput from './components/reusable/UserInput/UserInput.js';
import Validation from './components/one-time/Validation/Validation.js';
import Char from './components/one-time/Char/Char.js';


class App extends Component {
	state = {
		content: 'edit me 1',
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
				<Validation/>
				{this.renderChars(this.state.content)}
			</div>
		);
	}
}

export default App;
