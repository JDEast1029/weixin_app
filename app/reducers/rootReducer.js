import { combineReducers } from '../libs/redux/redux';
import homeReducer from './home';

const rootReducer = combineReducers({
	homeReducer
});

export default rootReducer;