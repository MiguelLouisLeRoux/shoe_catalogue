function shoeFactory() {
    var shoeList = [{image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2159410/original.jpg", brand: "Adidas", price: "R2599.00", size: "9", stock: 3, colour: "White"}, 
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2075782/original.jpg", brand: "Adidas", price: "R2599.99", size: "8", stock: 3, colour: "Black"}, 
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2054099/original.jpg", brand: "Adidas", price: "R2599.99", size: "7", stock: 3, colour: "Blue"}, 
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2155221/original.jpg", brand: "Adidas", price: "R1499.99", size: "5", stock: 3, colour: "Blue"}, 
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2066888/original.jpg", brand: "Adidas", price: "R1499.99", size: "10", stock: 3, colour: "Red"}, 
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1932843/original.jpg", brand: "Adidas", price: "R1499.99", size: "9", stock: 3, colour: "Grey"},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1931440/original.jpg", brand: "Nike", price: "R1599.99", size: "9", stock: 6, colour: "White"},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2188959/original.jpg", brand: "Nike", price: "R1999.99", size: "8", stock: 6, colour: "White"},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1885442/original.jpg", brand: "Nike", price: "R1999.99", size: "7", stock: 6, colour: "Grey"},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1896913/original.jpg", brand: "Nike", price: "R1999.99", size: "6", stock: 6, colour: "Black"},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2049017/original.jpg", brand: "Nike", price: "R1899.99", size: "9", stock: 6, colour: "Red"},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2023956/original.jpg", brand: "Nike", price: "R1499.99", size: "8", stock: 6, colour: "Green"},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2052855/original.jpg", brand: "Asics", price: "R1299.99", size: "9", stock: 2, colour: "Grey"},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1809575/original.jpg", brand: "Asics", price: "R1399.99", size: "8", stock: 2, colour: "Black"},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2074046/original.jpg", brand: "Converse", price: "R999.99", size: "8", stock: 3, colour: "Blue"},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/678663/original.jpg", brand: "Converse", price: "R999.99", size: "9", stock: 3, colour: "Black"},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1702002/original.jpg", brand: "Converse", price: "R999.99", size: "7", stock: 3, colour: "Red"},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2171254/original.jpg", brand: "New Balance", price: "R1299.99", size: "8", stock: 3, colour: "Blue"},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2133974/original.jpg", brand: "New Balance", price: "R1299.99", size: "9", stock: 3, colour: "Blue"},
    {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2171200/original.jpg", brand: "New Balance", price: "R1299.99", size: "8", stock: 3, colour: "Red"}]

    var error = "Sorry, No match found."

    function filtering(brands, colour, size) {

        for (var i = 0; i <shoeList.length; i++) {

            var itt = shoeList[i];
            
            //Filtering
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
                console.log(filt6);
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

    function addCart(object) {
        object.stock--;
    }


    function values() {
        return {
            theList : shoeList,
            theError : error,
        }
    }

    return { values,
             filtering,
             addCart,

    }
}