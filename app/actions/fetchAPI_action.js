import {API_KEY} from '../../config';
import {API_BASE_URL} from '../../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_CATEGORY_SUCCESS = 'FETCH_GATEGORY_SUCCESS';
export const fetchCategorySuccess = (data,category) => ({
	type: FETCH_GATEGORY_SUCCESS,
	categoryData: {
		category:category,
		data:data
	}	
});

export const FETCH_ERROR = 'FETCH_ERROR';
export const fetchError = error => ({
	type: FETCH_ERROR,
	error
});

export const fetchCategory = async (category) => async (dispatch,getState) => {
	const endpoint = `${API_BASE_URL}?apiKey=${API_KEY}&country=us&category=${category}`;
	try {
		let response = await fetch(endpoint);
		let normalizedRes = await normalizeResponseErrors(response);
		let responseJson = await normalizedRes.json();
		let returnData = fetchCategorySuccess(responseJson,category);
		return dispatch(returnData);
	} catch (error) {
		dispatch(fetchError(error));
	}
};