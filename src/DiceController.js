class DiceController {
    button= undefined;
    division= undefined;
    randomNumberGenerator= undefined;
    
    constructor( button, division, randomNumberGenerator) {
        this.button= button;
        this.division= division;
        this.randomNumberGenerator= randomNumberGenerator;
        button.onClick( this.onButtonClicked)
    }

    onButtonClicked() {
        this.randomNumberGenerator.perform();
        this.division.setText( ''+ this.randomNumberGenerator.getValue());
    }
}