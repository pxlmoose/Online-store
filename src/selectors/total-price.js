const totalPrice = (items) => {
    return items
   .map((item) => item.amount)
   .reduce((sum, value) => sum + value, 0);
}

export default totalPrice;