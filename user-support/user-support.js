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
const clear = document.querySelector(".remove");
const outOfStock_Message = document.querySelector(".no-stock");
const addError_Message = document.querySelector(".addError");
const newShoe_sect = document.querySelector(".new-shoe-sect");


var previewTemplateSource = document.querySelector(".previewTemplate").innerHTML;

var fact = shoeFactory();

//Preview sneaker
preview.addEventListener('click', function(){
    
    if (image.value === "") {
        
        image.value = fact.values().errorImage;
        image.classList.add("crimson");
        setTimeout(function(){
            image.value = "";
            image.classList.remove("crimson");
        }, 1500);
    } else if (tag.value === "")  {

        tag.value = fact.values().errorTag;
        tag.classList.add("crimson");
        setTimeout(function(){
            tag.value = "";
            tag.classList.remove("crimson");
        }, 1500);
    } else if (price.value === "") {

        price.value = fact.values().errorPrice;
        price.classList.add("crimson");
        setTimeout(function(){
            price.value = "";
            price.classList.remove("crimson");
        }, 1500);

    } else {

        fact.newShoe(image.value, brand.value, colour.value, size.value, stock.value, tag.value, price.value);

        var userTemplate = Handlebars.compile(previewTemplateSource);
        var userData = { 
            shoes : fact.values().newShoesList
        };

        userDataHTML = userTemplate(userData);
        newShoe_sect.innerHTML = userDataHTML;
    } 
    
});

//Clear preview of sneaker
clear.addEventListener('click', function(){
    location.reload();
})

//Remove out of stock item 
function removeOutOfStock(value) {
    const add_New_Stock = document.querySelector(".stock-upp");
    
    fact.removeOutOfStock(value, add_New_Stock.value);

    var userData = { 
        
        shoes : fact.values().stockList
    };

    userDataHTML = userTemplate(userData);
    outStock.innerHTML = userDataHTML;

    localStorage["outOfStock"] = JSON.stringify(fact.values().stockList);
    localStorage["shoeList"] = JSON.stringify(fact.values().theList);
}

//Addingnew sneaker to catalogue
addShoe.addEventListener('click', function(){
    
    if (newShoe_sect.childElementCount === 0) {
        
        addError_Message.innerHTML = fact.values().addError;
        setTimeout(function(){
            addError_Message.innerHTML = "";
        }, 1500);

    } else {
        
        fact.addingNewShoe();
        
        localStorage["shoeList"] = JSON.stringify(fact.values().theList);
        
        
        location.reload();
    }
    
});

var templateSource = document.querySelector(".userTemplate").innerHTML;
var userTemplate = Handlebars.compile(templateSource);

//Out of stock list
if (localStorage["shoeList"] && localStorage["cartList"] && localStorage["total"] && localStorage["outOfStock"]) {
    fact.resetOutStock(JSON.parse(localStorage["outOfStock"]));

    var userData = { 
        
        shoes : fact.values().stockList
    };

    userDataHTML = userTemplate(userData);
    outStock.innerHTML = userDataHTML;

    //Preventing stock from decreasing below 1
    const add_New_Stock = document.querySelector(".stock-upp");
    if (outStock.contains(add_New_Stock)) {
        add_New_Stock.addEventListener('change', function(){
    
            if (add_New_Stock.value === "" || add_New_Stock.value < 1) {
                add_New_Stock.value = 1;
            }
        })
    }   
}

if (localStorage["shoeList"]) {
    var newList = JSON.parse(localStorage["shoeList"]);
    
    fact.resetShoeList(newList);
}

// Regex for price input
price.addEventListener('change', function (){
    price.value = fact.regExCost(price.value);

    if (price.value === "Incorrect price format.") {
        price.classList.add("crimson");
        setTimeout(function(){
            price.value = "";
            price.classList.remove("crimson");
        }, 1500);
    }
})

//Preventing stock from decreasing below 1
stock.addEventListener('change', function(){
    
    if (stock.value === "" || stock.value < 1) {
        stock.value = 1;
    }
})

//Check if sneaker ID tag already exists
tag.addEventListener('change', function(){
    tag.value = fact.checkTag(tag.value);
    
    if (tag.value === "ID already exists.") {
        tag.classList.add("crimson");
        setTimeout(function(){
            tag.value = "";
            tag.classList.remove("crimson");
        }, 1500);
    } 
});

//Displaying or removing out of stock message
if (outStock.childElementCount === 0) {
    outOfStock_Message.classList.remove("display");
} else if (outStock.childElementCount > 0) {
    outOfStock_Message.classList.add("display");
}


