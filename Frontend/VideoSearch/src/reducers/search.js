import * as types from '../constants/ActionTypes'

const search = (state={},action) => {
	switch  (action.type) {
	case types.REQUEST_SEARCH_RESULT:
		return Object.assign({}, state, {
			isFetching: true
		});
	case types.RECEIVE_SEARCH_RESULT:
		return Object.assign({}, state,
			{isFetching:false}
			,(action.error ? {error: action.error}: null)
			,(action.videos ?{videos:action.videos}:null) );
	case types.REQUEST_MOST_SEARCH_RESULT:
		return Object.assign({}, state, {
			isFetching: true
		});
	case types.RECEIVE_MOST_SEARCH_RESULT:
		return Object.assign({}, state,
			{isFetching:false}
			,(action.error ? {error: action.error}: null)
			,(action.mostSearchedes ?{mostSearchedes:action.mostSearchedes}:null) );
	default:
		return state;
	}
};

export default search;