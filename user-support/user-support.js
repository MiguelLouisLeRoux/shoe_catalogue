const outStock = document.querySelector(".stock-list");

var fact = shoeFactory();

var templateSource = document.querySelector(".userTemplate").innerHTML;
var userTemplate = Handlebars.compile(templateSource);

if (localStorage["shoeList"] && localStorage["cartList"] && localStorage["total"] && localStorage["outOfStock"]) {
    
    var userData = { 
        shoes : JSON.parse(localStorage["outOfStock"])
    };

    userDataHTML = userTemplate(userData);
    outStock.innerHTML = userDataHTML;

}