import uuid from 'uuid/dist/v1';

export const bookReducer = (state, action) => {
    switch(action.type) {
        case "ADD_BOOK":
            return[...state, {
                title: action.book.title,
                author: action.book.author,
                id: uuid()
            }]
        case "REMOVE_BOOK":
            return state.filter(book => book.id !== action.id)
        default:
            return state
    }
}

//now state represents the books, because the ID it will take it from the Action, which is the other parameter that we bring in here
//to compare!! 