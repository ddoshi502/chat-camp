class Game{
    constructor(){
      this.button1 = createButton('Science');
      this.button2 = createButton('S.s.');
      this.button3 = createButton('Math');
      this.button4 = createButton('English');
      this.title = createElement('Chat Camp');
       
      }
      hide(){
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.title.hide();
  }
  
  display(){
      this.title.html("Chat Camp");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.Start.position(displayWidth/2 + 30, displayHeight/2);

      this.button1.position(150,200,40,10 );
      this.button2.position(200,200,40,10);
      this.button3.position(250,200,40,10);
      this.button4.position(300,200,40,10);
  
     
    }
  
  }