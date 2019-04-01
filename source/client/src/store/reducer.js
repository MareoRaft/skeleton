import actionTypes from './actions.js';

const initialState = {
	content: 'edit me reducer',
	ingredients: {
		ham: 0,
		cheese: 0,
	},
	totalPrice: 4,
};

const reducer = (state=initialState, action) => {
	switch(action.type) {
		case actionTypes.ADD_INGREDIENT:
			return {
				...state,
				ingredients: {
					...state.ingredients,
					[action.ingrName]: state.ingredients[action.ingrName] + 1,
				},
			};
		default:
			return state;
	};
};

export default reducer;
