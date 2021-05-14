var bag = document.querySelector(".bag");
var bagCont = document.querySelector(".side-bar");
var closeBag = document.querySelector(".close");
var shoeSect = document.querySelector(".the-shoe");

var theShoeFactory = shoeFactory();
console.log(shoeFactory());

document.addEventListener('DOMContentLoaded', function(){
    var templateSource = document.querySelector(".userTemplate").innerHTML;
    var userTemplate = Handlebars.compile(templateSource);
    console.log(theShoeFactory.values().theList)
    var userData = { 
        shoes : theShoeFactory.values().theList
    };

    userDataHTML = userTemplate(userData);
    shoeSect.innerHTML = userDataHTML;
    
})

bag.addEventListener("click", function() {
    bagCont.classList.add("show");
})

closeBag.addEventListener("click", function() {
    bagCont.classList.remove("show");
})
