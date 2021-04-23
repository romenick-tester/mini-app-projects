import { SET_LOADING, SET_STORIES, SET_ERROR, REMOVE_STORY, HANDLE_SEARCH } from "./constants";

const fetchStories = async (url, dispatch) => {
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

const removeStory = (id, dispatch) => {
    dispatch({ type: REMOVE_STORY, payload: id });
}

const searchStory = (query, dispatch) => {
    dispatch({ type: HANDLE_SEARCH, payload: query })
}

export { fetchStories, removeStory, searchStory };