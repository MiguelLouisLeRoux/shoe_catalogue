var bag = document.querySelector(".bag");
var bagCont = document.querySelector(".side-bar");
var closeBag = document.querySelector(".close");
var shoeSect = document.querySelector(".the-shoe");
var brandFilter = document.querySelector(".brand");
var colourFilter = document.querySelector(".colour");
var sizeFilter = document.querySelector(".size");
var filterButton = document.querySelector(".filtButton");



//Factory function reference
var theShoeFactory = shoeFactory();

document.addEventListener('DOMContentLoaded', function(){
    
    //Template
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

        var userData = { 
            shoes : theShoeFactory.filtering(theBrand, theColour, theSize)
        };
    
        userDataHTML = userTemplate(userData);
        shoeSect.innerHTML = userDataHTML;

        //Error message condition
        if (shoeSect.childElementCount === 0) {
            shoeSect.innerHTML = theShoeFactory.values().theError; 
        }
    });
    
    // Adding to cart
    var addBtn = document.querySelectorAll(".addTo");

    for (const itt of addBtn) {
        itt.addEventListener("click", function() {
            console.log(itt.parentNode);
        })
    }
})

//Show Shopping Cart 
bag.addEventListener("click", function() {
    bagCont.classList.add("show");
})

//Close Shopping Cart
closeBag.addEventListener("click", function() {
    bagCont.classList.remove("show");
})

