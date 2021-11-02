describe( "DiceController", function() {
    var button= undefined;
    var division= undefined;
    var randomNumberGenerator= undefined
    var diceController= undefined;

    beforeEach( function() {
        button= jasmine.createSpyObj( 'Button', {
            onClick: undefined
        });
        division= jasmine.createSpyObj( 'Division', {
            setText: undefined
        }, {

        });
        randomNumberGenerator= jasmine.createSpyObj( 'RandomNumberGenerator', {
            perform: undefined, 
            getValue: 3
        }, {

        });
        diceController= new DiceController( button, division, randomNumberGenerator);
    });

    it( "muss erstellt werden können", function() {
        expect( diceController).toBeTruthy();
    });

    it( "muss button.onClick() aufrufen", function() {
        expect( button.onClick).toHaveBeenCalledWith( diceController.onButtonClicked);
    });

    it( "muss randomNumberGenerator.perform() aufrufen", function() {
        diceController.onButtonClicked();
        expect( randomNumberGenerator.perform).toHaveBeenCalledWith();
    });

    it( "muss randomNumberGenerator.getValue() aufrufen", function() {
        diceController.onButtonClicked();
        expect( randomNumberGenerator.getValue).toHaveBeenCalledWith();
    });

    it( "muss division.setText aufrufen", function() {
        diceController.onButtonClicked();
        expect( division.setText).toHaveBeenCalledWith( "3");
    });

    
});