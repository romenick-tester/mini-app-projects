const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "CLEAR_CART":
            return { ...state, cart: [] };

        default:
            console.log(state);
            return state;
    }
}

export default cartReducer;