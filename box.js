class Box {
    constructor(x,y,width,height) {
      var options = {
          density: 0.000003
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 5){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);
      }else{
        World.remove(world, this.body);
      }
    }
  };