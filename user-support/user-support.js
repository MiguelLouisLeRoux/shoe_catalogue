var preview = document.querySelector(".displayShoe");
var add = document.querySelector(".addShoe");
var imgLink = document.querySelector(".addImage");
var brand = document.querySelector(".brand");
var colour = document.querySelector(".colour");
var size = document.querySelector(".size");
var price = document.querySelector(".price");
var stock = document.querySelector(".stock");
var tag = document.querySelector(".tag");
var newShoe = document.querySelector(".displayNewShoe");
var theShoeSect = document.querySelector(".the-shoe");
var templateSource = document.querySelector(".userTemplate").innerHTML;

var shoeFactory = shoeFactory();

preview.addEventListener('click', function(){
    shoeFactory.newShoe(imgLink.value, brand.value, colour.value, size.value, stock.value, tag.value, price.value)

    var userTemplate = Handlebars.compile(templateSource);
    var userData = { 
        shoes : shoeFactory.values().newShoe
    };

    userDataHTML = userTemplate(userData);
    newShoe.innerHTML = userDataHTML;
});

add.addEventListener('click', function(){

    shoeFactory.addingNewShoe();
    newShoe.innerHTML = "";

    shoeFactory.addingNewShoe();

    var userTemplate = Handlebars.compile(templateSource);
    var userData = { 
         shoes : shoeFactory.values().theList
    };

    userDataHTML = userTemplate(userData);
    theShoeSect.innerHTML = userDataHTML;
    
});