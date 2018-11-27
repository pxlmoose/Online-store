const selectTotalPrice = (items) => {
    return items
   .map((item) => item.price)
   .reduce((sum, value) => sum + value, 0);
}

export default selectTotalPrice;