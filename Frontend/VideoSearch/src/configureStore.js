import { createStore, applyMiddleware} from 'redux';
import search from './reducers';
import thunkMiddleware from 'redux-thunk';

const configureStore = () => {
	const persistedState = undefined;
	const store = createStore(search
		,persistedState
		,applyMiddleware(thunkMiddleware)
		);
	return store;
};

export default configureStore;