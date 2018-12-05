
const itemsReducerDefaultState = [];

const itemsReducer = (state = itemsReducerDefaultState, action) => {
    switch (action.type) {
        // case 'ADD_ITEM':
        //     return [
        //         ...state,
        //         action.item
        //     ];
        // case 'REMOVE_ITEM':
        //     return state.filter(({ id }) => id !== action.id);
        case 'SET_ITEMS':
            return action.items;
        case 'SET_CART':
            return action.cart;
        default:
            return state;
    }
};

export default itemsReducer;