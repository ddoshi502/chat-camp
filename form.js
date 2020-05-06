class Form{
  constructor(){
    this.input = createInput("Name");
    this.Start = createButton('Start');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
     
    }
    hide(){
    
    this.greeting.hide();
    this.Start.hide();
    this.input.hide();
    this.title.hide();
}

display(){
    this.title.html("Chat Camp");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.Start.position(displayWidth/2 + 30, displayHeight/2);

    this.Start.mousePressed(()=>{
      this.input.hide();
      this.Start.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

  }

}