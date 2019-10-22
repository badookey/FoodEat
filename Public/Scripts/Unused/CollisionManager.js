// -----JS CODE-----
// @input Component.ScriptComponent highScoreController
// @input SceneObject[] foods
// @input Component.ScriptComponent behaviorScript
// @input Component.ScriptComponent sphere

//Bind to custom event call
function incrementScore() {
    script.highScoreController.api.incrementScore();
}
function eatOneSphere() {
    script.api.sphere.eatIfColliding();
}
script.behaviorScript.api.addTriggerResponse(eatOneSphere);
//global.scBehaviorSystem.addCustomTriggerResponse("Sphere Ate", incrementScore);

//function setupDistanceCheck() {
//    if (!(script.distanceCheckObjectA && script.distanceCheckObjectB)) {
//        return;
//    }
//    var transformA = script.distanceCheckObjectA.getTransform();
//    var transformB = script.distanceCheckObjectB.getTransform();
//    whenCompareTypeMatches(function () {
//        return transformA.getWorldPosition().distance(transformB.getWorldPosition());
//    }, script.distanceCheckDistance, script.distanceCheckCompareType, onTrigger, script.distanceCheckAllowRepeat, false);
//}

