class Plinko{
    constructor(x,y){
        //this.radius=radius;
        var options = {
            'restitution':0.8,
            'friction':1,
            'density':0.01,
            'isStatic': true
        }
        this.body= Bodies.circle(x,y,10, options);
        World.add(world,this.body);
    }
    display(){
        fill("purple")
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,10,10);
    } 
};