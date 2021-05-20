var bag = document.querySelector(".bag");
var bagCont = document.querySelector(".side-bar");
var cart = document.querySelector(".bag-content");
var closeBag = document.querySelector(".close");
var shoeSect = document.querySelector(".the-shoe");
var brandFilter = document.querySelector(".brand");
var colourFilter = document.querySelector(".colour");
var sizeFilter = document.querySelector(".size");
var filterButton = document.querySelector(".filtButton");



//Factory function reference
var theShoeFactory = shoeFactory();
    
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

//Template for displaying sneakers in cart
var cartTemplateSource = document.querySelector(".cartTemplate").innerHTML;
var cartTemplate = Handlebars.compile(cartTemplateSource);

function addBtn(itt) {
   theShoeFactory.addCart(itt);
   

    shoeSect.innerHTML = "";

    //display template
    var userData = { 
        shoes : theShoeFactory.values().theFilt
    };

    userDataHTML = userTemplate(userData);
    shoeSect.innerHTML = userDataHTML;

    //cart template
    var cartData = { 
        shoes : theShoeFactory.values().theCart
    };

    cartDataHTML = cartTemplate(cartData);
    cart.innerHTML = cartDataHTML;
}


   


//Show Shopping Cart 
bag.addEventListener("click", function() {
    bagCont.classList.add("show");
})

//Close Shopping Cart
closeBag.addEventListener("click", function() {
    bagCont.classList.remove("show");
})

