import database from '../firebase/firebase';

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

// FETCH_DATA_FOR_CART
export const setCart = (cart) => ({
    type: 'SET_CART',
    cart
});

export const startSetCart = () => {
    return (dispatch) => {
        return database.ref('cart').once('value').then((snapshot) => {
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
    return (dispatch) => {
        dispatch(clearCart());
        return database.ref('cart').set(null);
    };
};

