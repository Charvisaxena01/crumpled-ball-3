class Lancher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 10
        }
        this.pointB = pointB
        this.Lancher= Constraint.create(options);
        World.add(world, this.Lancher);
    }
fly(){
    this.Lancher.bodyA = null;
}
      display(){
          if(this.Lancher.bodyA){
            var pointA = this.Lancher.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("blue")
            line(pointA.x, pointA.y, pointB.x, pointB.y);
          }
    }
    
}



