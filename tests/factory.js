function shoeFactory() {
    var shoeList = [{brand: "Nike", price: "R1299.00", size: 8, stock: 4}, 
    {brand: "Nike", price: "R1299.00", size: 8, stock: 4}, 
    {brand: "Nike", price: "R1299.00", size: 8, stock: 4}, 
    {brand: "Nike", price: "R1299.00", size: 8, stock: 4}, 
    {brand: "Nike", price: "R1299.00", size: 8, stock: 4}, 
    {brand: "Nike", price: "R1299.00", size: 8, stock: 4}]

    function values() {
        return {
            theList : shoeList,
        }
    }

    return { values,

    }
}