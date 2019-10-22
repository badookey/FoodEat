// -----JS CODE-----

//@input SceneObject 
//@input Component.ScriptComponent highScoreController

script.highScoreController.api.incrementScore();

var transform = script.getTransform();
var sphereTransform = script.otherSphere.getTransform();
print(transform.getLocalPosition().x);
print(sphereTransform.getLocalPosition().x);
//print(transform.getWorldPosition().y);