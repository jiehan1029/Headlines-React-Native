import {API_KEY} from '../../config';
import {API_BASE_URL} from '../../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';
export const fetchCategorySuccess = (data,category) => {
	let res={
		type: FETCH_CATEGORY_SUCCESS,
		categoryData: {
			category:category,
			data:data
		}
	}
	return res;
};

export const FETCH_ERROR = 'FETCH_ERROR';
export const fetchError = error => ({
	type: FETCH_ERROR,
	error
});

export const fetchCategory = (category) => async (dispatch,getState) => {
	//console.log('in fetch category function');
	const endpoint = `${API_BASE_URL}?apiKey=${API_KEY}&category=${category}`;
	//console.log('endpont=',endpoint);
	try {
		let response = await fetch(endpoint);
		let normalizedRes = await normalizeResponseErrors(response);
		let responseJson = await normalizedRes.json();
		let responseArticles = responseJson.articles;
		let returnData = fetchCategorySuccess(responseArticles,category);
		//console.log('in try block, after api call, response.articles=',returnData);
		return dispatch(returnData);
	} catch (error) {
		dispatch(fetchError(error));
	}
};