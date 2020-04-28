const initialState = {
    goods: [ ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOOK_TO_CART':
            return {
                ...state,
                goods: [...state.goods, action.payload]
            }
        case 'REMOVE_BOOK_FROM_CART':
            return {
                ...state,
                goods: state.goods.filter( o=> o.id !== action.payload)
            }
        default:
            return state;
    }
}