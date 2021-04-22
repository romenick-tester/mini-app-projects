import { SET_LOADING, SET_STORIES, SET_ERROR } from "./constants";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

const fetchStories = async (dispatch) => {
    dispatch({ type: SET_LOADING });

    try {
        const res = await fetch(`${API_ENDPOINT}`);
        const data = await res.json();

        dispatch({ type: SET_STORIES, payload: data.hits });

    } catch (err) {
        console.error(err.message);
        dispatch({ type: SET_ERROR });
    }
}

export { fetchStories };