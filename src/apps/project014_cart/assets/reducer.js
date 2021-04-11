const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "CLEAR_CART":
            return { ...state, cart: [] };

        case "REMOVE_ITEM":
            const tempCart1 = state.cart.filter((item) => item.id !== payload);
            return { ...state, cart: tempCart1 };

        case "CHANGE_AMOUNT":
            const tempCart2 = state.cart.map((item) => {
                if (item.id === payload.id) {
                    if (payload.type === "inc") {
                        item = { ...item, amount: item.amount + 1 };
                    } else if (payload.type === "dec") {
                        item = { ...item, amount: item.amount - 1 };
                    }
                }

                return item;
            }).filter((item) => item.amount !== 0);
            return { ...state, cart: tempCart2 };

        default:
            console.log(state);
            return state;
    }
}

export default cartReducer;