import database from '../firebase/firebase';


// [action-name] updates store
// start[action-name] is for changes in database, it will fire actual action in itself


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




