import fetch from 'isomorphic-fetch';
import * as types from '../constants/ActionTypes'

function requestSearch(requestParams) {
	return {
		type: types.REQUEST_SEARCH_RESULT,
		requestParams
	};
}
function receiveSearch(requestParams, json) {
	return {
		type: types.RECEIVE_SEARCH_RESULT,
		requestParams,
		videos: json.results
	}
}
export function fetchSearch(url,requestParams) {
	return function (dispatch) {
		dispatch(requestSearch(requestParams));
		return fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestParams)
		})
		.then(response => response.json())
		.then(json =>{
			dispatch(receiveSearch(requestParams, json));
		})
		.catch(function (err){
			console.log(err);
		});
	};
}
function requestMostSearch(requestParams) {
	return {
		type: types.REQUEST_MOST_SEARCH_RESULT,
		requestParams
	};
}
function receiveMostSearch(requestParams, json) {
	return {
		type: types.RECEIVE_MOST_SEARCH_RESULT,
		requestParams,
		mostSearchedes: json
	}
}
export function fetchMostSearched(requestParams) {
	return function (dispatch) {
		dispatch(requestMostSearch(requestParams));
		return fetch("http://localhost:4000/MostSearched", {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: ""
		})
		.then(response => response.json())
		.then(json =>{
			dispatch(receiveMostSearch(requestParams, json));
		})
		.catch(function (err){
			console.log(err);
		});
	};
}
