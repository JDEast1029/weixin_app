import * as types from '../constants/actions/home.js';

const initialState = {
	count: 0
}

const homeReducer = (state = initialState, action) => {
	switch (action.type) {
    case types.HOME_MAIN_GET: 
      state = {
        count: state.count + 1
      };
      return state;
		default:
			return state;
	}
}

export default homeReducer;