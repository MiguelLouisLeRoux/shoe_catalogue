function shoeFactory() {
    var shoeList = [{image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2159410/original.jpg", brand: "Adidas", price: 2599.99, size: "9", stock: 10, colour: "White", tag: "A1", quantity: 1}, 
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2075782/original.jpg", brand: "Adidas", price: 2599.99, size: "8", stock: 13, colour: "Black", tag: "A2", quantity: 1}, 
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2054099/original.jpg", brand: "Adidas", price: 2599.99, size: "7", stock: 7, colour: "Blue", tag: "A3", quantity: 1}, 
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2155221/original.jpg", brand: "Adidas", price: 1499.99, size: "5", stock: 8, colour: "Blue", tag: "A4", quantity: 1}, 
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2066888/original.jpg", brand: "Adidas", price: 1499.99, size: "10", stock: 12, colour: "Red", tag: "A5", quantity: 1}, 
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1932843/original.jpg", brand: "Adidas", price: 1499.99, size: "9", stock: 8, colour: "Grey", tag: "A6", quantity: 1},
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

    //Cart list
    var cart = {};

    //Grand Total 
    var total = 0.00;

    //User messages
    var error = "Sorry, No match found.";
    var noStock = "Out of stock";

    //User Support Out of Stock list 
    var outOfStock = [];

    //User Support
    var newShoesList = [];
    var reg1 = /^[1-9]\d{0,3}\.\d{2}$/;

    //User support error messages
    var imgLink = "Enter image link.";
    var tagID = "Enter shoe ID tag.";
    var price = "Enter price.";
    var theBrand = "Select a brand.";
    var theColour = "Select a colour";
    var theSize = "Select a size";
    var addShoe = "Preview item before adding to catalogue."
    

    //Filtering
    function filtering(brands, colour, size) {
        
        for (var i = 0; i <shoeList.length; i++) {

            var itt = shoeList[i];

            if (itt.brand === brands && itt.colour === colour && itt.size === size) {
                var filt = shoeList.filter(function(itt){
                    return itt.brand === brands && itt.colour === colour && itt.size === size;
                })

                return filt;

            } else if (itt.colour === colour && itt.size === size && brands === "All") {
                var filt2 = shoeList.filter(function(itt){
                    return itt.colour === colour && itt.size === size;
                })

                return filt2;

            } else if (itt.brand === brands && itt.size === size && colour === "All") {
                var filt3 = shoeList.filter(function(itt){
                    return itt.brand === brands && itt.size === size;
                })

                return filt3;

            } else if (itt.brand === brands && itt.colour === colour && size === "All") {
                var filt4 = shoeList.filter(function(itt){
                    return itt.brand === brands && itt.colour === colour;
                })

                return filt4;

            } else if (itt.brand === brands && colour === "All" && size === "All") {
                var filt5 = shoeList.filter(function(itt){
                    return itt.brand === brands;
                })

                return filt5;

            } else if (itt.colour === colour && brands === "All" && size === "All") {
                var filt6 = shoeList.filter(function(itt){
                    return itt.colour === colour;
                })

                return filt6;

            } else if (itt.size === size && brands === "All" && colour === "All") {
                var filt7 = shoeList.filter(function(itt){
                    return itt.size === size;
                })

                return filt7;

            } else if (brands === "All" && colour === "All" && size === "All") {    
                return shoeList;
            }
        }
    }
    
    //Adding to cart
    function addCart(tag) {
        for (var i = 0; i < shoeList.length; i++) {

            var itt = shoeList[i];

            if (itt.tag === tag) {
                
                if (itt.stock > 1) {
                    itt.stock--;

                    if (!cart.hasOwnProperty(tag)) {
                        cart[tag] = itt;
                        
                        total += itt.price;

                    } else if(cart.hasOwnProperty(tag)) {
                    
                        cart[tag].quantity++;
                    
                        total += itt.price;

                    }

                } else if (itt.stock === 1) {
                    
                    cart[tag].quantity++;
                    total += itt.price;
                    itt.stock = noStock;
    
                }
            }
        }  
    }

    //Removing from cart
    function remove(tag) {
        for (var i = 0; i < shoeList.length; i++) {
            var itt = shoeList[i];

            if (itt.tag === tag) {

                if (itt.stock === noStock) {
                    itt.stock = 1;
                    
                    total -= itt.price;

                    cart[tag].quantity--;

                } else if (itt.stock >= 1 && cart[tag].quantity > 1) {
                    itt.stock++;

                    total -= itt.price;

                    cart[tag].quantity--;

                } else if (cart[tag].quantity === 1) {

                    while(itt.quantity != 1){
                        itt.quantity--
                    }

                    itt.stock++;
                    total -= itt.price;

                    delete cart[tag];

                }
                
            }
        } 
        
    }

    //Checking out from cart 
    function checkOut() {
        total = 0.00;
        cart = {};

        for (var i = 0; i < shoeList.length; i++) {

            var itt = shoeList[i];

            if (itt.stock === noStock) {

                outOfStock.push(itt);

                let index = shoeList.indexOf(itt);

                if (index > -1) {
                    shoeList.splice(index, 1);
                }
            }

        }
    }

    function userSupport(link, brand, colour, size, stock, tag, price) {
        this.image = link;
        this.brand = brand;
        this.colour = colour;
        this.size = size;
        this.stock = stock
        this.tag = tag;
        this.price = price;
    }
    
    function newShoe(link, brand, colour, size, stock, tag, price) {

        newShoesList.shift();

        var theNewShoe = new userSupport(link, brand, colour, size, stock, tag, price);
    
        newShoesList.push(theNewShoe);
    }

    function addingNewShoe() {
        for (var i = 0; i < newShoesList.length; i++) {
            var itt = newShoesList[i];
            shoeList.push(itt);
                
        }
    }

    function localStorageSetting(theShoeList, theCartList, theTotal, outStock) {
        shoeList = theShoeList;
        cart = theCartList;
        total = theTotal;
        outOfStock = outStock;
    }

    function regExCost(cost) {
        
        if(/^[1-9]\d{0,3}\.\d{2}$/.test(cost)){
            
            return cost;

        } else {
           
            return "Incorrect price format.";
        }
    }

    function checkTag(theTag) {
        var trimTag = theTag.trim();
        
        for (var i = 0; i < shoeList.length; i++) {
            var itt = shoeList[i];
            
            if (itt.tag === trimTag) {
                return "ID already exists.";
            }  
        }
        return trimTag;
    }

    // reseting shoe list from user support local storage sect
    function resetShoeList(localList) {
        shoeList = localList;
        // shoeList.push(localList);
    }

    function values() {
        return {
            theList : shoeList,
            theError : error,
            outOfStock : noStock,
            cart : cart,
            total : total.toFixed(2),
            stockList : outOfStock,
            newShoesList : newShoesList,
            errorSize : theSize,
            errorColour : theColour,
            errorBrand : theBrand,
            errorPrice : price,
            errorTag : tagID,
            errorImage : imgLink,
            addError : addShoe,
        }
    }

    return { values,
             filtering,
             addCart,
             remove,
             checkOut,
             newShoe,
             addingNewShoe,
             localStorageSetting,
             regExCost,
             checkTag,
             resetShoeList,
    }
}


