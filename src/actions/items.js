import uuid from 'uuid';

export const addItem = (
    {
        name = '',
        description = '',
        price = 0,
    } = {}
) => (
    {
        type: 'ADD_ITEM',
        item: {
            id: uuid(),
            name,
            description,
            price
        }
    }
);

export const removeItem = ({ id } = {}) => ({
    type: 'REMOVE_ITEM',
    id
});