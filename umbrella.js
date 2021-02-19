class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.radius = 60;
        this.body = Bodies.circle(x,y+10,65,options);
        World.add(world, this.body)
    }
       
}