const outStock = document.querySelector(".stock-list");
const preview = document.querySelector(".preview");
const addShoe = document.querySelector(".add");
const catalogue = document.querySelector(".catalogue");
const image = document.querySelector(".link");
const brand = document.querySelector(".brand");
const size = document.getElementById("sel-size");
const stock = document.querySelector(".stock");
const tag = document.querySelector(".tag");
const colour = document.getElementById("the-col");
const price = document.querySelector(".price");
const newShoe_sect = document.querySelector(".new-shoe-sect");
var previewTemplateSource = document.querySelector(".previewTemplate").innerHTML;

var fact = shoeFactory();

preview.addEventListener('click', function(){
    
    fact.newShoe(image.value, brand.value, colour.value, size.value, stock.value, tag.value, price.value);

    var userTemplate = Handlebars.compile(previewTemplateSource);
    var userData = { 
        shoes : fact.values().newShoesList
    };

    userDataHTML = userTemplate(userData);
    newShoe_sect.innerHTML = userDataHTML;

    
});
localStorage.clear();
addShoe.addEventListener('click', function(){

    // console.log(localStorage["shoeList"]);
    console.log(fact.values().newShoesList);
    // var updateShoeList = JSON.parse(localStorage["shoeList"]);
    // console.log(updateShoeList);
    // console.log(updateShoeList);
    // updateShoeList.push(fact.addingNewShoe());
    // console.log(updateShoeList);
    // localStorage["shoeList"] = JSON.stringify(updateShoeList);
});

var templateSource = document.querySelector(".userTemplate").innerHTML;
var userTemplate = Handlebars.compile(templateSource);

if (localStorage["shoeList"] && localStorage["cartList"] && localStorage["total"] && localStorage["outOfStock"]) {
    
    var userData = { 
        shoes : JSON.parse(localStorage["outOfStock"])
    };

    userDataHTML = userTemplate(userData);
    outStock.innerHTML = userDataHTML;
    
}
