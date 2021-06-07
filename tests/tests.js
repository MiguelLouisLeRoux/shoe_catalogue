describe ("Lubobalo's Shoe Catalogue", function(){
    describe ("Should be able to filter shoes according to appropriate selection of size, colour and brand.", function(){
        it('Should be able to display all blue shoes when only blue colour is selected.', function(){
            
            const testFactory = shoeFactory();
            
            assert.deepEqual([{image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2054099/original.jpg", brand: "Adidas", price: 2599.99, size: "7", stock: 7, colour: "Blue", tag: "A3", quantity: 1},
            {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2155221/original.jpg", brand: "Adidas", price: 1499.99, size: "5", stock: 8, colour: "Blue", tag: "A4", quantity: 1},
            {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2074046/original.jpg", brand: "Converse", price: 999.99, size: "8", stock: 3, colour: "Blue", tag: "C1", quantity: 1},
            {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2171254/original.jpg", brand: "New Balance", price: 1299.99, size: "8", stock: 15, colour: "Blue", tag: "NB1", quantity: 1},
            {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2133974/original.jpg", brand: "New Balance", price: 1299.99, size: "9", stock: 15, colour: "Blue", tag: "NB2", quantity: 1}], testFactory.filtering("All", "Blue", "All"));
        })

        it('Should be able to display all "Adidas" shoes when only the Adidas brand option has been selected.', function(){
            const testFactory = shoeFactory();
            
            assert.deepEqual([{image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2159410/original.jpg", brand: "Adidas", price: 2599.99, size: "9", stock: 10, colour: "White", tag: "A1", quantity: 1},
            {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2075782/original.jpg", brand: "Adidas", price: 2599.99, size: "8", stock: 13, colour: "Black", tag: "A2", quantity: 1},
            {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2054099/original.jpg", brand: "Adidas", price: 2599.99, size: "7", stock: 7, colour: "Blue", tag: "A3", quantity: 1},
            {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2155221/original.jpg", brand: "Adidas", price: 1499.99, size: "5", stock: 8, colour: "Blue", tag: "A4", quantity: 1},
            {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2066888/original.jpg", brand: "Adidas", price: 1499.99, size: "10", stock: 12, colour: "Red", tag: "A5", quantity: 1},
            {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1932843/original.jpg", brand: "Adidas", price: 1499.99, size: "9", stock: 8, colour: "Grey", tag: "A6", quantity: 1}], testFactory.filtering("Adidas", "All", "All") )
        })

        it('Should be able to display all size 7 shoes when only the size 7 option has been selected.', function(){
            const testFactory = shoeFactory();
            
            assert.deepEqual([{image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2054099/original.jpg", brand: "Adidas", price: 2599.99, size: "7", stock: 7, colour: "Blue", tag: "A3", quantity: 1},
            {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1885442/original.jpg", brand: "Nike", price: 1999.99, size: "7", stock: 6, colour: "Grey", tag: "N3", quantity: 1},
            {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1702002/original.jpg", brand: "Converse", price: 999.99, size: "7", stock: 3, colour: "Red", tag: "C3", quantity: 1}], testFactory.filtering("All", "All", "7") )
        })

        it('Should be able to display all "White"; "Nike"; "size: 9" shoes when these options are selected.', function(){
            const testFactory = shoeFactory();
            
            assert.deepEqual([{image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1931440/original.jpg", brand: "Nike", price: 1599.99, size: "9", stock: 6, colour: "White", tag: "N1", quantity: 1}], testFactory.filtering("Nike", "White", "9") )
        })

        it('Should be able to return an error when there are no shoes which matches the filtered options', function(){
            const testFactory = shoeFactory();
            
            testFactory.filtering("Adidas", "Black", "5")

            assert.equal("Sorry, no match found.", testFactory.values().theError)
        })

    })
    
    describe ("Catalogue section should be able to interact with cart section and perform appropriate actions.", function(){
        it('Should be able to add shoes to the cart list when add button has been clicked', function(){
            
            const testFactory = shoeFactory();
            
            testFactory.addCart("A1");
            testFactory.addCart("N1");
            testFactory.addCart("C1");

            assert.deepEqual({"A1": {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2159410/original.jpg", brand: "Adidas", price: 2599.99, size: "9", stock: 9, colour: "White", tag: "A1", quantity: 1},
             "N1": {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1931440/original.jpg", brand: "Nike", price: 1599.99, size: "9", stock: 5, colour: "White", tag: "N1", quantity: 1}, 
             "C1": {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2074046/original.jpg", brand: "Converse", price: 999.99, size: "8", stock: 2, colour: "Blue", tag: "C1", quantity: 1}}, testFactory.values().cart);

        })

        it('Should be able to increment the quantity of a shoe when it has been added to the cart more than once', function(){

            const testFactory = shoeFactory();

            testFactory.addCart("A1");
            testFactory.addCart("A1");
            testFactory.addCart("A1");

            assert.deepEqual(3, testFactory.values().cart.A1.quantity);
        })
        
        it('Should be able to decrement the quantity value when a shoe has been removed from the cart', function(){
            const testFactory = shoeFactory();

            testFactory.addCart("N1");
            testFactory.addCart("N2");
            testFactory.addCart("A3");
            testFactory.addCart("A3");
            testFactory.addCart("A3");
            testFactory.addCart("A3");

            testFactory.remove("A3");

            assert.deepEqual(3, testFactory.values().cart.A3.quantity);
            
        })

        it('Should be able to decrement the stock value when a shoe has been added to the cart', function(){
            const testFactory = shoeFactory();

            testFactory.addCart("N1");
            testFactory.addCart("N1");
            testFactory.addCart("N1");

            assert.deepEqual(3, testFactory.values().cart.N1.stock);
            
        })

        it('Should assign an "Out of stock" message when stock value decrements below 1', function(){
            const testFactory = shoeFactory();

            testFactory.addCart("N1");
            testFactory.addCart("N1");
            testFactory.addCart("N1");
            testFactory.addCart("N1");
            testFactory.addCart("N1");
            testFactory.addCart("N1");

            assert.deepEqual("Out of stock", testFactory.values().cart.N1.stock);
            
        })

        it('Should be able to increment the stock value when a shoe has been removed from the cart', function(){
            const testFactory = shoeFactory();

            testFactory.addCart("N1");
            testFactory.addCart("N1");
            testFactory.addCart("N1");
            testFactory.addCart("N1");

            testFactory.remove("N1");
            testFactory.remove("N1");


            assert.deepEqual(4, testFactory.values().cart.N1.stock);
            
        })

        it('Should be able to increment the total cost value when a shoe has been added to the cart', function(){
            const testFactory = shoeFactory();

            testFactory.addCart("N1");
            testFactory.addCart("N2");
            testFactory.addCart("A3");

            assert.deepEqual(6199.97, testFactory.values().total);
            
        })

        it('Should be able to decrement the total cost value when a shoe has been removed from the cart', function(){
            const testFactory = shoeFactory();

            testFactory.addCart("N1");
            testFactory.addCart("N2");
            testFactory.addCart("A3");
            testFactory.addCart("A3");

            testFactory.remove("A3");
            testFactory.remove("A3");

            assert.deepEqual(3599.98, testFactory.values().total);
            
        })

        it ('Should be able to reset total cost to zero when shoes in cart have been checked out', function(){
            const testFactory = shoeFactory();

            testFactory.addCart("A3");
            testFactory.addCart("N2");
            testFactory.addCart("N2");

            testFactory.checkOut();

            assert.deepEqual(0.00, testFactory.values().total);

        })

        it ('Should be able to empty cart when checkout has been clicked', function(){
            const testFactory = shoeFactory();

            testFactory.addCart("A3");
            testFactory.addCart("N2");
            testFactory.addCart("N2");
            testFactory.addCart("A3");
            testFactory.addCart("N2");
            testFactory.addCart("N2");

            testFactory.checkOut();

            assert.deepEqual({}, testFactory.values().cart);

        })

        it ('Should be able to remove all "out of stock" shoes from catalogue that have been checked out', function(){
            const testFactory = shoeFactory();

            testFactory.addCart("A1");
            testFactory.addCart("A1");
            testFactory.addCart("A1");
            testFactory.addCart("A1");
            testFactory.addCart("A1");
            testFactory.addCart("A1");
            testFactory.addCart("A1");
            testFactory.addCart("A1");
            testFactory.addCart("A1");
            testFactory.addCart("A1");

            testFactory.checkOut();

            assert.deepEqual([{image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2075782/original.jpg", brand: "Adidas", price: 2599.99, size: "8", stock: 13, colour: "Black", tag: "A2", quantity: 1}, 
            {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2054099/original.jpg", brand: "Adidas", price: 2599.99, size: "7", stock: 7, colour: "Blue", tag: "A3", quantity: 1}, 
            {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2155221/original.jpg", brand: "Adidas", price: 1499.99, size: "5", stock: 8, colour: "Blue", tag: "A4", quantity: 1}, 
            {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2066888/original.jpg", brand: "Adidas", price: 1499.99, size: "10", stock: 12, colour: "Red", tag: "A5", quantity: 1}, 
            {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1932843/original.jpg", brand: "Adidas", price: 1499.99, size: "9", stock: 8, colour: "Grey", tag: "A6", quantity: 1},
            {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1931440/original.jpg", brand: "Nike", price: 1599.99, size: "9", stock: 6, colour: "White", tag: "N1", quantity: 1},
            {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2188959/original.jpg", brand: "Nike", price: 1999.99, size: "8", stock: 6, colour: "White", tag: "N2", quantity: 1},
            {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1885442/original.jpg", brand: "Nike", price: 1999.99, size: "7", stock: 6, colour: "Grey", tag: "N3", quantity: 1},
            {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1896913/original.jpg", brand: "Nike", price: 1999.99, size: "6", stock: 6, colour: "Black", tag: "N4", quantity: 1},
            {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2049017/original.jpg", brand: "Nike", price: 1899.99, size: "9", stock: 6, colour: "Red", tag: "N5", quantity: 1},
            {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2023956/original.jpg", brand: "Nike", price: 1499.99, size: "8", stock: 6, colour: "Green", tag: "N6", quantity: 1},
            {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2052855/original.jpg", brand: "Asics", price: 1299.99, size: "9", stock: 10, colour: "Grey", tag: "AS1", quantity: 1},
            {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1809575/original.jpg", brand: "Asics", price: 1399.99, size: "8", stock: 11, colour: "Black", tag: "AS2", quantity: 1},
            {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2074046/original.jpg", brand: "Converse", price: 999.99, size: "8", stock: 3, colour: "Blue", tag: "C1", quantity: 1},
            {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/678663/original.jpg", brand: "Converse", price: 999.99, size: "9", stock: 3, colour: "Black", tag: "C2", quantity: 1},
            {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1702002/original.jpg", brand: "Converse", price: 999.99, size: "7", stock: 3, colour: "Red", tag: "C3", quantity: 1},
            {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2171254/original.jpg", brand: "New Balance", price: 1299.99, size: "8", stock: 15, colour: "Blue", tag: "NB1", quantity: 1},
            {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2133974/original.jpg", brand: "New Balance", price: 1299.99, size: "9", stock: 15, colour: "Blue", tag: "NB2", quantity: 1},
            {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2171200/original.jpg", brand: "New Balance", price: 1299.99, size: "8", stock: 13, colour: "Red", tag: "NB3", quantity: 1}], testFactory.values().theList);

        })

    })

    describe ("Lubobalo's User Support Section", function(){
        describe ("Out of stock list", function(){
            it('Should be able to display shoes that are out of stock', function(){
    
                const testFactory = shoeFactory();
    
                testFactory.addCart("C1");
                testFactory.addCart("C1");
                testFactory.addCart("C1");
                testFactory.addCart("C3");
                testFactory.addCart("C3");
                testFactory.addCart("C3");
                testFactory.checkOut();

                assert.deepEqual([{image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2074046/original.jpg", brand: "Converse", price: 999.99, size: "8", stock: "Out of stock", colour: "Blue", tag: "C1", quantity: 1},
                {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1702002/original.jpg", brand: "Converse", price: 999.99, size: "7", stock: "Out of stock", colour: "Red", tag: "C3", quantity: 1}], testFactory.values().stockList);
            })
        })

        describe ("Add new stock to catalogue", function(){
            it('Should be able to preview a new shoe instance', function(){
    
                const testFactory = shoeFactory();
                
                assert.deepEqual(testFactory.values().newShoesList[0], testFactory.newShoe("https://assets.superbalistcdn.co.za/142x206/filters:quality(75):format(jpg)/2080436/original.jpg", "Nike", "White", "8", 15, "N7", 1999.99));
            })

            it('Should return an error message when preview button has been clicked but details of new shoe has not been entered', function(){
    
                const testFactory = shoeFactory();

                testFactory.newShoe();
                testFactory.addingNewShoe();

                assert.deepEqual("Enter image link.", testFactory.values().errorImage);
            })

            it('Should return an error message when incorrect price format has been entered', function(){
    
                const testFactory = shoeFactory();

                assert.deepEqual("Incorrect price format.", testFactory.regExCost("22333Ad"));
            })

            it('Should return an error message when an already existing shoe ID tag has been entered', function(){
    
                const testFactory = shoeFactory();

                assert.deepEqual("ID already exists.", testFactory.checkTag("A1"));
            })

            it('Should return an error message when the "add to catalogue" button has been clicked but the shoe has not been previewed first', function(){
    
                const testFactory = shoeFactory();

                assert.deepEqual("Preview item before adding to catalogue.", testFactory.values().addError);
            })

            it('Should be able to add new shoe instance to catalogue', function(){
    
                const testFactory = shoeFactory();

                testFactory.newShoe("https://assets.superbalistcdn.co.za/142x206/filters:quality(75):format(jpg)/2080436/original.jpg", "Nike", "White", "8", 15, "N7", 1999.99)
                testFactory.addingNewShoe();

                assert.deepEqual([{image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2159410/original.jpg", brand: "Adidas", price: 2599.99, size: "9", stock: 10, colour: "White", tag: "A1", quantity: 1}, 
                {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2075782/original.jpg", brand: "Adidas", price: 2599.99, size: "8", stock: 13, colour: "Black", tag: "A2", quantity: 1}, 
                {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2054099/original.jpg", brand: "Adidas", price: 2599.99, size: "7", stock: 7, colour: "Blue", tag: "A3", quantity: 1}, 
                {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2155221/original.jpg", brand: "Adidas", price: 1499.99, size: "5", stock: 8, colour: "Blue", tag: "A4", quantity: 1}, 
                {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2066888/original.jpg", brand: "Adidas", price: 1499.99, size: "10", stock: 12, colour: "Red", tag: "A5", quantity: 1}, 
                {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1932843/original.jpg", brand: "Adidas", price: 1499.99, size: "9", stock: 8, colour: "Grey", tag: "A6", quantity: 1},
                {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1931440/original.jpg", brand: "Nike", price: 1599.99, size: "9", stock: 6, colour: "White", tag: "N1", quantity: 1},
                {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2188959/original.jpg", brand: "Nike", price: 1999.99, size: "8", stock: 6, colour: "White", tag: "N2", quantity: 1},
                {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1885442/original.jpg", brand: "Nike", price: 1999.99, size: "7", stock: 6, colour: "Grey", tag: "N3", quantity: 1},
                {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1896913/original.jpg", brand: "Nike", price: 1999.99, size: "6", stock: 6, colour: "Black", tag: "N4", quantity: 1},
                {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2049017/original.jpg", brand: "Nike", price: 1899.99, size: "9", stock: 6, colour: "Red", tag: "N5", quantity: 1},
                {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2023956/original.jpg", brand: "Nike", price: 1499.99, size: "8", stock: 6, colour: "Green", tag: "N6", quantity: 1},
                {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2052855/original.jpg", brand: "Asics", price: 1299.99, size: "9", stock: 10, colour: "Grey", tag: "AS1", quantity: 1},
                {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1809575/original.jpg", brand: "Asics", price: 1399.99, size: "8", stock: 11, colour: "Black", tag: "AS2", quantity: 1},
                {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2074046/original.jpg", brand: "Converse", price: 999.99, size: "8", stock: 3, colour: "Blue", tag: "C1", quantity: 1},
                {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/678663/original.jpg", brand: "Converse", price: 999.99, size: "9", stock: 3, colour: "Black", tag: "C2", quantity: 1},
                {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/1702002/original.jpg", brand: "Converse", price: 999.99, size: "7", stock: 3, colour: "Red", tag: "C3", quantity: 1},
                {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2171254/original.jpg", brand: "New Balance", price: 1299.99, size: "8", stock: 15, colour: "Blue", tag: "NB1", quantity: 1},
                {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2133974/original.jpg", brand: "New Balance", price: 1299.99, size: "9", stock: 15, colour: "Blue", tag: "NB2", quantity: 1},
                {image: "https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/2171200/original.jpg", brand: "New Balance", price: 1299.99, size: "8", stock: 13, colour: "Red", tag: "NB3", quantity: 1},
                {image: "https://assets.superbalistcdn.co.za/142x206/filters:quality(75):format(jpg)/2080436/original.jpg", brand: "Nike", price: 1999.99, size: "8", stock: 15, colour: "White", tag: "N7", quantity: 1}], testFactory.values().theList);
            })
        })
    });
});
