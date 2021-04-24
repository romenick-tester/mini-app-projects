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
            const tempHits1 = state.hits.filter((item) => item.objectID !== payload);

            return { ...state, hits: tempHits1 };

        case HANDLE_SEARCH:
            return { ...state, query: payload, page: 0 };

        case HANDLE_PAGE:
            let nextPage;
            if(payload === "inc") {
                nextPage = state.page + 1;
                if(nextPage > state.nbPages - 1) {
                    nextPage = 0;
                }
            } else {
                nextPage = state.page - 1;
                if(nextPage < 1) {
                    nextPage = state.nbPages - 1;
                } 
            }
            
            return { ...state, page: nextPage };

        default:
            return state;
    }

};

export default reducer;
