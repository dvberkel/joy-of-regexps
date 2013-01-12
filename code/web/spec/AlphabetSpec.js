describe("Alphabet", function(){
    describe("View", function(){
        var alphabet;

        beforeEach(function(){
            loadFixtures("viewport.html");
        });

        beforeEach(function(){
            alphabet = new Joy.Alphabet([
                { symbol : "A" },
                { symbol : "B" },
                { symbol : "C" }
            ]);
            new Joy.AlphabetView({ model : alphabet, el : $("#viewport")});
        });

        it("should create an alphabet", function(){
            expect($(".alphabet")).toExist();
        });

        it("alphabet should contain left- and right-braces", function(){
            expect($(".alphabet .left.brace")).toExist();
            expect($(".alphabet .right.brace")).toExist();
        });

        it("alphabet should contain characters", function(){
            expect($(".alphabet .characters")).toExist();
        });

        it("when there are few charachters each character should be present", function(){
            expect($(".alphabet .characters .character").size()).toBe(3);
        });
    });
});
