
const itemsReducerDefaultState = [];

const itemsReducer = (state = itemsReducerDefaultState, action) => {
    switch (action.type) {
         case 'SET_ITEMS':
            return action.items;
        default:
            return state;
    }
};

export default itemsReducer;