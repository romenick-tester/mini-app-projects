const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        default:
            console.log(payload);
            return state;
    }
}

export default cartReducer;