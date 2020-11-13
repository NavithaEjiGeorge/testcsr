class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement('h1');
    }

    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide();
        
    }

    display(){
        var title = createElement('h1');
        title.html("Car Racing Game");
        title.position(480,10);

      
        this.input.position(450,150);
        this.button.position(500, 250);

           this.button.mousePressed(()=>{
           this.input.hide();
           this.button.hide();

            player.name = this.input.value();

            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
           this.greeting.html("Hello   " + player.name);
           this.greeting.position(500,250);

        })
    }
}