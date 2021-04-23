import { SET_LOADING, SET_STORIES, SET_ERROR, REMOVE_STORY, HANDLE_PAGE, HANDLE_SEARCH } from "./constants";

const reducer = (state, action) => {
    const { type, payload } = action;

    switch(type) {
        case SET_LOADING:
            return { ...state, loading: true };

        case SET_STORIES:
            return { ...state, loading: false, ...payload };

        case SET_ERROR:
            return { ...state, loading: false, error: { show: true, msg: "error" } };

        case REMOVE_STORY:
            const tempHits = state.hits.filter((item) => item.objectID !== payload);

            return { ...state, hits: tempHits }

        default:
            return state;
    }

};

export default reducer;
