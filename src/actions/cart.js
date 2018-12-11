import database from '../firebase/firebase';

// ADD_ITEM_TO_CART
export const addItem = (item) => ({
    type: 'ADD_ITEM',
    item
});

export const startAddItem = (itemData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const  {
            name = '',
            description = '',
            price = 0,
        } = itemData;
        const item = { name, description, price };

        database.ref(`customers/${uid}/cart`).push(item).then((ref) => {
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
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`customers/${uid}/cart/${id}`).remove().then(() => {
            dispatch(removeItem({ id }))
        });
    };
};

// FETCH_DATA_FOR_CART
export const setCart = (cart) => ({
    type: 'SET_CART',
    cart
});

export const startSetCart = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`customers/${uid}/cart`).once('value').then((snapshot) => {
            const cart = [];

            snapshot.forEach((childSnapshot) => {
                cart.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            
            dispatch(setCart(cart));
        });
    };
};

// CLEAR_CART_DATA_AFTER_LOGOUT
export const clearCart = () => ({
    type: 'CLEAR_CART',
    cart: []
});

// CLEAR_CART_AND_DATABSE_CART_AFTER_SUCCESSFUL_CHECKOUT
export const startClearCart = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        dispatch(clearCart());
        return database.ref(`customers/${uid}/cart`).set(null);
    };
};

