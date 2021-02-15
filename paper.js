class Paper{
    constructor(x,y,width,height){
        //properties
        var options = {
            isStatic:false,
            restitution: 0.3,
            friction:0.5,
            density:1.2
         }
       this.Body = Bodies.circle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       World.add(myWorld,this.Body);
   }

   //function
   display(){
    var pos = this.Body.position;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4)
    stroke("blue")
    fill("white");
    rect(0,0,this.width,this.height);
   pop();
   }