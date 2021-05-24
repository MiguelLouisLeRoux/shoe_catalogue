
function shoeFactory() {
    var shoeList = [{image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2159410/original.jpg", brand: "Adidas", price: 2599.99, size: "9", stock: 10, colour: "White", tag: "A1", quantity: 1}, 
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2075782/original.jpg", brand: "Adidas", price: 2599.99, size: "8", stock: 13, colour: "Black", tag: "A2", quantity: 1}, 
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2054099/original.jpg", brand: "Adidas", price: 2599.99, size: "7", stock: 7, colour: "Blue", tag: "A3", quantity: 1}, 
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2155221/original.jpg", brand: "Adidas", price: 1499.99, size: "5", stock: 8, colour: "Blue", tag: "A4", quantity: 1}, 
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2066888/original.jpg", brand: "Adidas", price: 1499.99, size: "10", stock: 12, colour: "Red", tag: "A5", quantity: 1}, 
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1932843/original.jpg", brand: "Adidas", price: 1499.99, size: "9", stock: 5, colour: "Grey", tag: "A6", quantity: 1},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1931440/original.jpg", brand: "Nike", price: 1599.99, size: "9", stock: 6, colour: "White", tag: "N1", quantity: 1},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2188959/original.jpg", brand: "Nike", price: 1999.99, size: "8", stock: 6, colour: "White", tag: "N2", quantity: 1},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1885442/original.jpg", brand: "Nike", price: 1999.99, size: "7", stock: 6, colour: "Grey", tag: "N3", quantity: 1},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1896913/original.jpg", brand: "Nike", price: 1999.99, size: "6", stock: 6, colour: "Black", tag: "N4", quantity: 1},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2049017/original.jpg", brand: "Nike", price: 1899.99, size: "9", stock: 6, colour: "Red", tag: "N5", quantity: 1},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2023956/original.jpg", brand: "Nike", price: 1499.99, size: "8", stock: 6, colour: "Green", tag: "N6", quantity: 1},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2052855/original.jpg", brand: "Asics", price: 1299.99, size: "9", stock: 10, colour: "Grey", tag: "AS1", quantity: 1},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1809575/original.jpg", brand: "Asics", price: 1399.99, size: "8", stock: 11, colour: "Black", tag: "AS2", quantity: 1},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2074046/original.jpg", brand: "Converse", price: 999.99, size: "8", stock: 3, colour: "Blue", tag: "C1", quantity: 1},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/678663/original.jpg", brand: "Converse", price: 999.99, size: "9", stock: 3, colour: "Black", tag: "C2", quantity: 1},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1702002/original.jpg", brand: "Converse", price: 999.99, size: "7", stock: 3, colour: "Red", tag: "C3", quantity: 1},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2171254/original.jpg", brand: "New Balance", price: 1299.99, size: "8", stock: 15, colour: "Blue", tag: "NB1", quantity: 1},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2133974/original.jpg", brand: "New Balance", price: 1299.99, size: "9", stock: 15, colour: "Blue", tag: "NB2", quantity: 1},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2171200/original.jpg", brand: "New Balance", price: 1299.99, size: "8", stock: 13, colour: "Red", tag: "NB3", quantity: 1}]

    //Filtered list
    var display = shoeList;
    
    //Sneakers added to cart
    var cartList = [];
    var cart = [];
    var ob = {};

    var grandTot = 0.00;
    
    //User messages
    var error = "Sorry, No match found.";
    var noStock = "Out of stock";

    //Filtering
    function filtering(brands, colour, size) {
        
        for (var i = 0; i <shoeList.length; i++) {

            var itt = shoeList[i];
            
            if (itt.brand === brands && itt.colour === colour && itt.size === size) {

                var filt = shoeList.filter(function(itt){
                    return itt.brand === brands && itt.colour === colour && itt.size === size;
                })
                display = filt;
                return filt;

            } else if (itt.colour === colour && itt.size === size && brands === "All") {
                var filt2 = shoeList.filter(function(itt){
                    return itt.colour === colour && itt.size === size;
                })
                display = filt2;
                return filt2;

            } else if (itt.brand === brands && itt.size === size && colour === "All") {
                var filt3 = shoeList.filter(function(itt){
                    return itt.brand === brands && itt.size === size;
                })
                display = filt3;
                return filt3;

            } else if (itt.brand === brands && itt.colour === colour && size === "All") {
                var filt4 = shoeList.filter(function(itt){
                    return itt.brand === brands && itt.colour === colour;
                })
                display = filt4;
                return filt4;
            

            } else if (itt.brand === brands && colour === "All" && size === "All") {
                var filt5 = shoeList.filter(function(itt){
                    return itt.brand === brands;
                })
                display = filt5;
                return filt5;
            
            } else if (itt.colour === colour && brands === "All" && size === "All") {
                var filt6 = shoeList.filter(function(itt){
                    return itt.colour === colour;
                })
                display = filt6;
                return filt6;
            
            } else if (itt.size === size && brands === "All" && colour === "All") {
                var filt7 = shoeList.filter(function(itt){
                    return itt.size === size;
                })
                display = filt7;
                return filt7;

            } else if (brands === "All" && colour === "All" && size === "All") {
                display = shoeList;
                return shoeList;
            }
        }
    }
    
    //Adding to cart
    function addCart(tag) {
        
        //Decrement when adding to cart
        for (var j = 0; j < shoeList.length; j++) {
            
            var itt2 = shoeList[j];
            
            if (tag === itt2.tag) {
                
                if (itt2.stock > 1) {

                    itt2.stock--;
                    
                    cartList.push(itt2);

                    grandTot += itt2.price;

                    if (!ob.hasOwnProperty(itt2.tag)) {
                        ob[itt2.tag] = 1;
                    } else if (ob.hasOwnProperty(itt2.tag)){
                        ob[itt2.tag]++;
                    }
                    
                } else if (itt2.stock === 1) {
                    
                    itt2.stock--;
                    
                    cartList.push(itt2);

                    grandTot += itt2.price;

                    if (!ob.hasOwnProperty(itt2.tag)) {
                        ob[itt2.tag] = 1;
                    } else if (ob.hasOwnProperty(itt2.tag)){
                        ob[itt2.tag]++;
                    }

                    itt2.stock = noStock;
                    
                }
                    
                

            }
            
        }
      
    }

    //Adding and updating cart data
    function set() {
        
        let uniqueChars = [...new Set(cartList)];
        cart = uniqueChars;
        

        for (var i = 0; i < cart.length; i++) {
            var itt = cart[i];

            if (ob.hasOwnProperty(itt.tag)) {
                itt.quantity = ob[itt.tag]
            }
        }
        
        return cart;
        
    }

    //Removing from cart
    function remove(tag) {
        
        for (var i = 0; i < cart.length; i++) {

            var itt = cart[i];

            if (grandTot > 0) {
            
                if (tag === itt.tag) {
                    grandTot -= itt.price;
                    console.log(cart);
                }     
            } else if (grandTot <= 0){
                grandTot = 0.00;
            }

            

            if (itt.tag === tag) {
                if (itt.quantity > 1) {
                    itt.quantity -= 1;

                    for (const theProp in ob) {
                        if (itt.tag === theProp) {
                            ob[theProp]--;
                        
                        }
                        
                    }

                    for (var k = 0; k < shoeList.length; k++) {
                        var theItt = shoeList[k];

                        if (theItt.tag === tag) {
                            if (theItt.stock === noStock) {
                                theItt.stock = 1;
                            } else {
                                theItt.stock++;
                            }
                            
                        }
                    }

                    return cart;

                } else if (itt.quantity === 1) {

                    for (const prop in ob) {
                        if (prop === itt.tag) {
                            delete ob[prop];
                        }
                    }

                    let uniqueChars = [...new Set(cartList)];
                    cartList = uniqueChars;

                    for (var j = 0; j < cartList.length; j++) {
                        var itt2 = cartList[j];

                        if (itt.tag === itt2.tag) {
                            let index1 = cartList.indexOf(itt2);
                        
                            if (index1 > -1) {
                                cartList.splice(index1, 1);
                            }
                        }
                    
                    }

                    for (var l = 0; l < shoeList.length; l++) {
                        var theItt1 = shoeList[l];

                        if (theItt1.tag === tag) {

                            theItt1.stock++;
                        
                        }
                    }

                    let index = cart.indexOf(itt);
                    if (index > -1) {
                    cart.splice(index, 1);
                    return cart;
                    }
                    
                }
                
            }
        }
    }

    //Reseting total after checkout
    function resetTot() {
        grandTot = 0.00;
        return grandTot.toFixed(2);
    }

    //Emptying cart after checkout
    function emptyCart() {

        for (var i = 0; i < display.length; i++) {
            var itt = shoeList[i];

            if (itt.stock === noStock) {
                let index = shoeList.indexOf(itt);
                if (index > -1) {
                    shoeList.splice(index, 1);
                }
            }
        }

        cartList = [];
        cart = [];
        ob = {};
        return cart;
    }

    function userSupport() {

    }

    function values() {
        return {
            theList : shoeList,
            theDisplay : display,
            theError : error,
            outOfStock : noStock,
            theCart : cartList,
            total : grandTot.toFixed(2),
        }
    }

    return { values,
             filtering,
             addCart,
             set,
             remove,
             resetTot,
             emptyCart,
             userSupport,
           
    }
}