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
//    theShoeFactory.set();
   

   //display template
   var userData = { 
        shoes : theShoeFactory.values().theDisplay
    };

    userDataHTML = userTemplate(userData);
    shoeSect.innerHTML = userDataHTML;
   
    //cart template
    var cartData = { 
        
        shoes : theShoeFactory.set()
    };

    cartDataHTML = cartTemplate(cartData);
    cart.innerHTML = cartDataHTML;

    grandTot.innerHTML = theShoeFactory.values().total;

    
}

function removeBtn(tag) {
    //cart template

    cart.innerHTML = "";

    var cartData = { 
        
        shoes : theShoeFactory.remove(tag)
    };

    cartDataHTML = cartTemplate(cartData);
    cart.innerHTML = cartDataHTML;

    grandTot.innerHTML = theShoeFactory.values().total;
    
}

checkOut.addEventListener('click', function(){
    cart.innerHTML = "";
    grandTot.innerHTML = theShoeFactory.resetTot();
})


//Show Shopping Cart 
bag.addEventListener("click", function() {
    bagCont.classList.add("show");
})

//Close Shopping Cart
closeBag.addEventListener("click", function() {
    bagCont.classList.remove("show");
})

