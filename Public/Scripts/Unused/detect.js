// -----JS CODE-----

//@input Component.ScriptComponent collider
var colliders = [];
var collide1;
var collide2;
var collide3;

script.api.AddAABB = function (AABB) {
    colliders.push(AABB)
    AABB.api.MinMaxCalculations();
    print(AABB.api.minX);
    print("added an AABB");

    //if (collide1 != null) {
    //    if (collide2 != null) {
    //        if (collide3 != null) {
    //            print(colliders.push(AABB));
    //        } else {
    //            collide3 = AABB;
    //            print(intersect(collide1, collide2));
    //        }
    //    } else {
    //        collide2 = AABB;
    //    }
    //}
    //else {
    //    collide1 = AABB;
    //}
}

function intersect(a, b) {
    return (a.api.minX <= b.api.maxX && a.api.maxX >= b.api.minX) &&
        (a.api.minY <= b.api.maxY && a.api.maxY >= b.api.minY) &&
        (a.api.minZ <= b.api.maxZ && a.api.maxZ >= b.api.minZ);
}

function checkCollisions() {
    for (x = 0; colliders.length -3 ; x++) {
        //try {
           // print(colliders[x])
        var AABB = colliders[x];
        AABB.api.MinMaxCalculations();
        print("started checking collisions, just did minmax")
        //} catch (err) {
        //    colliders.splice(x, 1);
        //    x--;
        //}
   }

    for (x = 0; colliders.length; x++) {
        for (y = x+1; y < colliders.length; y++) {
            var colX = colliders[x];
            var colY = colliders[y];
            if (intersect(colX, colY)) {
                //tell the scripts they intersect
                print("X AND Y INTERSECTED");
                //colX.api.Intersection(colY);
                //colY.api.Intersection(colX);
            }
        }
    }

}

var event = script.createEvent("UpdateEvent");
event.bind(checkCollisions);