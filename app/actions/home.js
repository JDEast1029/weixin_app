import * as types from '../constants/actions/home';

// test
export const test = (data) => {
	return {
		type: types.HOME_MAIN_GET,
		data
	}
}