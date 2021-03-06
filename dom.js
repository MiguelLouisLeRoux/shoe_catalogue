//Catalogue Dom
var bag = document.querySelector(".bag");
var bagCont = document.querySelector(".side-bar");
var cart = document.querySelector(".bag-content");
var closeBag = document.querySelector(".close");
var shoeSect = document.querySelector(".the-shoe");
var brandFilter = document.querySelector(".brand");
var colourFilter = document.querySelector(".colour");
var sizeFilter = document.querySelector(".size");
var filterButton = document.querySelector(".filtButton");
var grandTot = document.querySelector(".theTot");
var checkOut = document.querySelector(".check-out");

//Template reference for displaying sneakers in cart
var cartTemplateSource = document.querySelector(".cartTemplate").innerHTML;
var cartTemplate = Handlebars.compile(cartTemplateSource);

//Factory function reference
var theShoeFactory = shoeFactory();

//Local Storage Variables
var localShoeList;
var localCartList;
var localTotal;

//Template for displaying sneaker catalogue
var templateSource = document.querySelector(".userTemplate").innerHTML;
var userTemplate = Handlebars.compile(templateSource);
var userData = { 
    shoes : theShoeFactory.values().theList
};

userDataHTML = userTemplate(userData);
shoeSect.innerHTML = userDataHTML;

//Filter
filterButton.addEventListener("click", function(){
   
    var theBrand = brandFilter.value;
    var theColour = colourFilter.value;
    var theSize = sizeFilter.value;

    shoeSect.innerHTML = "";

    var filteredData = {
        shoes : theShoeFactory.filtering(theBrand, theColour, theSize)
    };

    filteredDataHTML = userTemplate(filteredData);
    shoeSect.innerHTML = filteredDataHTML;

    //Error message condition
    if (shoeSect.childElementCount === 0) {
        shoeSect.innerHTML = theShoeFactory.values().theError; 
    }
});  

//Adding to cart
function addBtn(itt) {

    theShoeFactory.addCart(itt);
   
    var theBrand = brandFilter.value;
    var theColour = colourFilter.value;
    var theSize = sizeFilter.value;

    var filteredData = {
        shoes : theShoeFactory.filtering(theBrand, theColour, theSize)
    };
    
    filteredDataHTML = userTemplate(filteredData);
    shoeSect.innerHTML = filteredDataHTML;
    
    //cart template
    var cartData = {
        
        shoes : theShoeFactory.values().cart

    };

    cartDataHTML = cartTemplate(cartData);
    cart.innerHTML = cartDataHTML;

    grandTot.innerHTML = theShoeFactory.values().total;

    localStorage["shoeList"] = JSON.stringify(theShoeFactory.values().theList);
    localStorage["cartList"] = JSON.stringify(theShoeFactory.values().cart);
    localStorage["total"] = theShoeFactory.values().total;
    localStorage["outOfStock"] = JSON.stringify(theShoeFactory.values().stockList);
}

//Removing from cart
function removeBtn(tag) {
    theShoeFactory.remove(tag);

    var theBrand = brandFilter.value;
    var theColour = colourFilter.value;
    var theSize = sizeFilter.value;

    var filteredData = {
        shoes : theShoeFactory.filtering(theBrand, theColour, theSize)
    };

    filteredDataHTML = userTemplate(filteredData);
    shoeSect.innerHTML = filteredDataHTML;
    
    var cartData = {
        
        shoes : theShoeFactory.values().cart

    };

    cartDataHTML = cartTemplate(cartData);
    cart.innerHTML = cartDataHTML;

    grandTot.innerHTML = theShoeFactory.values().total;

    localStorage["shoeList"] = JSON.stringify(theShoeFactory.values().theList);
    localStorage["cartList"] = JSON.stringify(theShoeFactory.values().cart);
    localStorage["total"] = theShoeFactory.values().total;
    localStorage["outOfStock"] = JSON.stringify(theShoeFactory.values().stockList);

}

//Checkout
checkOut.addEventListener("click", function(){
    theShoeFactory.checkOut();

    var theBrand = brandFilter.value;
    var theColour = colourFilter.value;
    var theSize = sizeFilter.value;

    var filteredData = {
        shoes : theShoeFactory.filtering(theBrand, theColour, theSize)
    };

    filteredDataHTML = userTemplate(filteredData);
    shoeSect.innerHTML = filteredDataHTML;
    
    cart.innerHTML = "";

    grandTot.innerHTML = theShoeFactory.values().total;

    localStorage["shoeList"] = JSON.stringify(theShoeFactory.values().theList);
    localStorage["cartList"] = JSON.stringify(theShoeFactory.values().cart);
    localStorage["total"] = theShoeFactory.values().total;
    localStorage["outOfStock"] = JSON.stringify(theShoeFactory.values().stockList);
})


//Show Shopping Cart 
bag.addEventListener("click", function() {
    bagCont.classList.add("show");
})

//Close Shopping Cart
closeBag.addEventListener("click", function() {
    bagCont.classList.remove("show");
})


if (localStorage["shoeList"] && localStorage["cartList"] && localStorage["total"] && localStorage["outOfStock"]) {

    localShoeList = JSON.parse(localStorage["shoeList"]);
    localCartList = JSON.parse(localStorage["cartList"]);
    localTotal = Number(localStorage["total"]);
    localOutStock = JSON.parse(localStorage["outOfStock"]);

    theShoeFactory.localStorageSetting(localShoeList, localCartList, localTotal, localOutStock);

    var theBrand = brandFilter.value;
    var theColour = colourFilter.value;
    var theSize = sizeFilter.value;
    
    var filteredData = {
        shoes : theShoeFactory.filtering(theBrand, theColour, theSize)
    };

    filteredDataHTML = userTemplate(filteredData);
    shoeSect.innerHTML = filteredDataHTML;

    var cartData = {
        
        shoes : theShoeFactory.values().cart
       
    };

    cartDataHTML = cartTemplate(cartData);
    cart.innerHTML = cartDataHTML;

    grandTot.innerHTML = theShoeFactory.values().total; 
    
}    

if (localStorage["shoeList"]) {
    var newList = JSON.parse(localStorage["shoeList"]);
    
    theShoeFactory.resetShoeList(newList);

    var theBrand = brandFilter.value;
    var theColour = colourFilter.value;
    var theSize = sizeFilter.value;
   
    var filteredData = {
        shoes : theShoeFactory.filtering(theBrand, theColour, theSize)
    };

    filteredDataHTML = userTemplate(filteredData);
    shoeSect.innerHTML = filteredDataHTML; 

}



