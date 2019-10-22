// -----JS CODE-----

//@input float width
//@input float height
//@input float breadth
//@input Component.ScriptComponent detect

script.api.minX = 0;
script.api.minY = 0;
script.api.minZ = 0;
script.api.maxX = 0;
script.api.maxY = 0;
script.api.maxZ = 0;

function Register() {
    if (script.detect.api) { //don't do the first call
        script.detect.api.AddAABB(script);
    }
}

script.api.MinMaxCalculations = function () {
    var position = script.getSceneObject().getTransform().getWorldPosition();
    var halfW = script.width / 2.0;
    var halfH = script.height / 2.0;
    var halfB = script.breadth / 2.0;

    script.api.minX = position.x - halfW;
    script.api.minY = position.y - halfH;
    script.api.minZ = position.Z - halfB;

    script.api.maxX = position.x + halfW;
    script.api.maxY = position.y + halfH;
    script.api.maxZ = position.Z + halfB;
    print("calculated min max")
}

Register();