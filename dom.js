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

//Factory function reference
var theShoeFactory = shoeFactory();

//Local Storage
var localCartList = theShoeFactory.values().cart;
var localShoeCatalogue = theShoeFactory.values().theDisplay;
    
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

    localShoeCatalogue = theShoeFactory.values().theDisplay;
    localCartList = theShoeFactory.values().cart;

    console.log(localCartList);
    console.log(localShoeCatalogue);
}

function removeBtn(tag) {
    //cart template
    cart.innerHTML = "";

    var cartData = { 
        
        shoes : theShoeFactory.remove(tag)
    };

    cartDataHTML = cartTemplate(cartData);
    cart.innerHTML = cartDataHTML;


    //display template
    var userData = { 
        shoes : theShoeFactory.values().theDisplay
    };

    userDataHTML = userTemplate(userData);
    shoeSect.innerHTML = userDataHTML;

    grandTot.innerHTML = theShoeFactory.values().total;
    
    localShoeCatalogue = theShoeFactory.values().theDisplay;
    localCartList = theShoeFactory.values().cart;
}

checkOut.addEventListener('click', function(){
    cart.innerHTML = "";
    theShoeFactory.emptyCart();

    var userData = { 
        shoes : theShoeFactory.values().theDisplay
    };

    userDataHTML = userTemplate(userData);
    shoeSect.innerHTML = userDataHTML;
    
    grandTot.innerHTML = theShoeFactory.resetTot();

    localShoeCatalogue = theShoeFactory.values().theDisplay;
    localCartList = theShoeFactory.values().cart;
})


//Show Shopping Cart 
bag.addEventListener("click", function() {
    bagCont.classList.add("show");
})

//Close Shopping Cart
closeBag.addEventListener("click", function() {
    bagCont.classList.remove("show");
})

//Local Storage
localStorage["theCatalogue"] = JSON.stringify(localShoeCatalogue);
localStorage["theCart"] = JSON.stringify(localCartList);

if (localStorage["theCatalogue"] && localStorage["theCart"]) {

    localCartList = JSON.parse(localStorage["theCart"]);
    localShoeCatalogue = JSON.parse(localStorage["theCatalogue"]);

    theShoeFactory.settingLocal(localShoeCatalogue, localCartList);

    
    
    var localUserData = { 
        shoes : theShoeFactory.values().theDisplay
    };

    localUserDataHTML = userTemplate(localUserData);
    shoeSect.innerHTML = localUserDataHTML;


    var cartData = { 
        
        shoes : theShoeFactory.values().cart
    };

    cartDataHTML = cartTemplate(cartData);
    cart.innerHTML = cartDataHTML;
};
