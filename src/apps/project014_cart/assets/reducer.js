const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "CLEAR_CART":
            return { ...state, cart: [] };

        case "REMOVE_ITEM":
            const tempCart = state.cart.filter((item) => item.id !== payload);
            return { ...state, cart: tempCart };

        default:
            console.log(state);
            return state;
    }
}

export default cartReducer;