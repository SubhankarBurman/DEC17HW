class Rope{


    constructor(body1,body2,offsetX,offsetY){


        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {


            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:this.offsetY}
            

        }

        this.rope = Constraints.create(options);

        World.add(world, this.rope);
        




    }
    display(){

        var point1 = this.rope.bodyA.position;
        var point2 = this.rope.bodyB.position;

        push();

        strokeWeight(4);
        stroke("white");
        line(point1.x,point1.y , point2.x, point2.y);

        pop();
    }

}