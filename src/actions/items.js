import database from '../firebase/firebase';



// [action-name] updates store
// start[action-name] is for changes in database, it will fire actual action in itself


// ADD_ITEM_TO_CART
export const addItem = (item) => ({
    type: 'ADD_ITEM',
    item
});

export const startAddItem = (itemData = {}) => {
    return (dispatch) => {
        const  {
            name = '',
            description = '',
            price = 0,
        } = itemData;
        const item = { name, description, price };

        database.ref('cart').push(item).then((ref) => {
            dispatch(addItem({
                id: ref.key,
                ...item
            }));
        });
    };
};



// REMOVE_ITEM_FROM_CART
export const removeItem = ({ id } = {}) => ({
    type: 'REMOVE_ITEM',
    id
});

export const startRemoveItem = ({ id } = {}) => {
    return (dispatch) => {
        return database.ref(`cart/${id}`).remove().then(() => {
            dispatch(removeItem({ id }))
        });
    };
};



// FETCH_ALL_DATA_FROM_DATABASE
export const setItems = (items) => ({
    type: 'SET_ITEMS',
    items
});

export const startSetItems = () => {
    return (dispatch) => {
        return database.ref('items').once('value').then((snapshot) => {
            const items = [];
            
            snapshot.forEach((childSnapshot) => {
                items.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setItems(items))
        });
    };
};

///------MAYBE THIS-------///

// FETCH_CART_DATA_FROM_DATABASE

// export const setCartItems = (cartItems) => ({
//     type: 'SET_CART_ITEMS',
//     cartItems
// });

// export const startSetCartItems = () => {
//     return (dispatcch) => {
//         return database.ref('cart').once('value').then((snapshot) => {
//             const cartItems = [];

//             snapshot.forEach((childSnapshot) => {
//                 cartItems.push({
//                     id: childSnapshot.key,
//                     ...childSnapshot.val()
//                 });
//             });

//             dispatch(setCartItems(cartItems));
//         });
//     };
// };


