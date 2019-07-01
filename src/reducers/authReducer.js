import types from '../actions';

const intialState = {
	id         : 0,
	first_name : '',
	email      : '',
	isLoading  : false,
	errors     : null,
};

export default (state = intialState, action) => {
	const { type, payload } = action;
	switch (type) {
		default:
			return state;
	}
};
