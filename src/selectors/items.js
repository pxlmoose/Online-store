 const getVisibleItems = (items, { text }) => {
    return items.filter((item) => {
        const textMatch = item.name.toLowerCase().includes(text.toLowerCase());

        return textMatch;
    }).sort((a, b) => {
        return a.price < b.price ? 1 : -1;
    });
};

export default getVisibleItems;