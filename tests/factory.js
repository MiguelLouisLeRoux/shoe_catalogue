function shoeFactory() {
    var shoeList = [{image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2159410/original.jpg", brand: "Adidas", price: "R2599.00", size: "9", stock: 10, colour: "White", tag: "A1"}, 
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2075782/original.jpg", brand: "Adidas", price: "R2599.99", size: "8", stock: 13, colour: "Black", tag: "A2"}, 
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2054099/original.jpg", brand: "Adidas", price: "R2599.99", size: "7", stock: 7, colour: "Blue", tag: "A3"}, 
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2155221/original.jpg", brand: "Adidas", price: "R1499.99", size: "5", stock: 8, colour: "Blue", tag: "A4"}, 
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2066888/original.jpg", brand: "Adidas", price: "R1499.99", size: "10", stock: 12, colour: "Red", tag: "A5"}, 
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1932843/original.jpg", brand: "Adidas", price: "R1499.99", size: "9", stock: 5, colour: "Grey", tag: "A6"},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1931440/original.jpg", brand: "Nike", price: "R1599.99", size: "9", stock: 6, colour: "White", tag: "N1"},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2188959/original.jpg", brand: "Nike", price: "R1999.99", size: "8", stock: 6, colour: "White", tag: "N2"},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1885442/original.jpg", brand: "Nike", price: "R1999.99", size: "7", stock: 6, colour: "Grey", tag: "N3"},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1896913/original.jpg", brand: "Nike", price: "R1999.99", size: "6", stock: 6, colour: "Black", tag: "N4"},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2049017/original.jpg", brand: "Nike", price: "R1899.99", size: "9", stock: 6, colour: "Red", tag: "N5"},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2023956/original.jpg", brand: "Nike", price: "R1499.99", size: "8", stock: 6, colour: "Green", tag: "N6"},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2052855/original.jpg", brand: "Asics", price: "R1299.99", size: "9", stock: 10, colour: "Grey", tag: "AS1"},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1809575/original.jpg", brand: "Asics", price: "R1399.99", size: "8", stock: 11, colour: "Black", tag: "AS2"},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2074046/original.jpg", brand: "Converse", price: "R999.99", size: "8", stock: 3, colour: "Blue", tag: "C1"},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/678663/original.jpg", brand: "Converse", price: "R999.99", size: "9", stock: 3, colour: "Black", tag: "C2"},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1702002/original.jpg", brand: "Converse", price: "R999.99", size: "7", stock: 3, colour: "Red", tag: "C3"},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2171254/original.jpg", brand: "New Balance", price: "R1299.99", size: "8", stock: 15, colour: "Blue", tag: "NB1"},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2133974/original.jpg", brand: "New Balance", price: "R1299.99", size: "9", stock: 15, colour: "Blue", tag: "NB2"},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2171200/original.jpg", brand: "New Balance", price: "R1299.99", size: "8", stock: 13, colour: "Red", tag: "NB3"}]

    var display = undefined;
    
    var error = "Sorry, No match found.";
    var noStock = "Out of stock";
    
    function filtering(brands, colour, size) {

        for (var i = 0; i <shoeList.length; i++) {

            var itt = shoeList[i];
            
            //Filtering
            if (itt.brand === brands && itt.colour === colour && itt.size === size) {
                var filt = shoeList.filter(function(itt){
                    return itt.brand === brands && itt.colour === colour && itt.size === size;
                })

                display = filt;
                
                return display;

            } else if (itt.colour === colour && itt.size === size && brands === "All") {
                var filt2 = shoeList.filter(function(itt){
                    return itt.colour === colour && itt.size === size;
                })

                display = filt2;
                
                return display;

            } else if (itt.brand === brands && itt.size === size && colour === "All") {
                var filt3 = shoeList.filter(function(itt){
                    return itt.brand === brands && itt.size === size;
                })

                display = filt3;
                return display;

            } else if (itt.brand === brands && itt.colour === colour && size === "All") {
                var filt4 = shoeList.filter(function(itt){
                    return itt.brand === brands && itt.colour === colour;
                })

                display = filt4;
                return display;
            

            } else if (itt.brand === brands && colour === "All" && size === "All") {
                var filt5 = shoeList.filter(function(itt){
                    return itt.brand === brands;
                })

                display = filt5;
                return display;
            
            } else if (itt.colour === colour && brands === "All" && size === "All") {
                var filt6 = shoeList.filter(function(itt){
                    return itt.colour === colour;
                })
                
                display = filt6;
                return display;
            
            } else if (itt.size === size && brands === "All" && colour === "All") {
                var filt7 = shoeList.filter(function(itt){
                    return itt.size === size;
                })

                display = filt7;
                return display;

            } else if (brands === "All" && colour === "All" && size === "All") {

                return shoeList;

            }

        }
    }

    

    //updating display
    function updateDisplay(par) {
        display = par;
    }

    function addCart(tag) {
        
        if (display === undefined) {
            
            for (var i = 0; i < shoeList.length; i++) {

                var itt = shoeList[i];

                if (itt.stock > 0) {

                    if (tag === itt.tag) {
                        itt.stock--;
                        
                        return shoeList;
                    }

                } else if (itt.stock === 0) {
            
                    return noStock;
                }
            }
        } 
        else if (display != undefined){
        
            for (var j = 0; j < display.length; j++) {

                var itt2 = display[j];

                if (itt2.stock > 0) {

                    if (tag === itt2.tag) {
                        itt2.stock--;

                        console.log(itt2);
                        for (var k = 0; k < shoeList.length; k++) {
                            var itt3 = shoeList[k];

                            if (tag === itt3.tag) {
                                itt3.stock--;
                                console.log(itt3);
                            }
                        }

                        return display;
                    }

                } else if (itt.stock === 0) {

                    return noStock;
                }

            }
        }
    }


    function values() {
        return {
            theList : shoeList,
            theError : error,
            outOfStock : noStock,
        }
    }

    return { values,
             filtering,
             updateDisplay,
             addCart,

    }
}