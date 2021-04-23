import { SET_LOADING, SET_STORIES, SET_ERROR } from "./constants";

const fetchStories = async (url,dispatch) => {
    dispatch({ type: SET_LOADING });

    try {
        const res = await fetch(`${url}`);
        const data = await res.json();

        dispatch({ type: SET_STORIES, payload: { hits: data.hits, nbPages: data.nbPages } });

    } catch (err) {
        console.error(err.message);
        dispatch({ type: SET_ERROR });
    }
}

export { fetchStories };