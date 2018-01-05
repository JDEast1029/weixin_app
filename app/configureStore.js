import { createStore, compose, applyMiddleware } from './libs/redux/redux';
import rootReducer from './reducers/rootReducer';

function configureStore() {
	const store = createStore(
		rootReducer,
		compose(applyMiddleware())
	  );
	return store;
}

module.exports = configureStore;