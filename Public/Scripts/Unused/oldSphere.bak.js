// -----JS CODE-----
// @input bool eaten
// @input bool mouthOpen
// @input Component.ScriptComponent highScoreController
// @input Component.ScriptComponent behaviorScript

script.eaten = false;
script.mouthOpen = false;
function ate() {
    //is sphere collision source
    if (script.eaten == false) { 
        script.highScoreController.api.incrementScore();
        script.getSceneObject().enabled = false;
    }
    script.eaten = true;
}

function mouthCollision() {
    if (!script.mouthOpen)
        ate();
}
//script.addCustomTriggerResponse("Sphere Collision")
//script.addCustomTriggerResponse("Sphere Ate", mouthCollision);
//script.behaviorScript.api.addTriggerResponse(mouthCollision);

function eatIfColliding() {
    print('ate');
}


var mouthOpenEvent = script.createEvent("MouthOpenedEvent");
mouthOpenEvent.faceIndex = 0;
mouthOpenEvent.bind(function (eventData) { script.mouthOpen = true; })

var mouthClosedEvent = script.createEvent("MouthClosedEvent");
mouthClosedEvent.faceIndex = 0;
mouthClosedEvent.bind(function (eventData) { script.mouthOpen = false; })

