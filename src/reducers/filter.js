const initialState = {
    filterBy: 'all',
    searchQuery: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_FILTER_BY':
            return {
                ...state,
                filterBy: action.payload
            }
        case 'SET_SEARCH_QUERY':
            return {
                ...state,
                searchQuery: action.payload
            }
        default:
            return state
    }
}