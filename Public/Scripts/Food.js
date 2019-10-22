// -----JS CODE-----
// @input Component.ScriptComponent behaviorScript


var eaten = false;
global.canEat = true;
//When the object is eaten
function eat() {
    if (global.canEat) {
        unbindCollisionDetection();
        script.getSceneObject().enabled = false;
        global.canEat = false;
        global.scBehaviorSystem.sendCustomTrigger("Increment Score");
        eaten = true;
    }
}

function unbindCollisionDetection() {
    script.behaviorScript.api.removeTriggerResponse(mouthCollision)
}
function onMouthClosed(eventData) {
    //Debug statement
    //print("mouth was closed --food.js");

    //This asks if the mouth is colliding with the current object,
    script.behaviorScript.api.addTriggerResponse(mouthCollision);

    //Delay removing the trigger response by 0.1seconds to give a window of opportunity for it to trigger
    var event = script.createEvent("DelayedCallbackEvent");
    event.bind(unbindCollisionDetection);
    event.reset(0.1);
 
}
function onMouthOpened(eventData) {
    global.canEat = true;
}

function mouthCollision() {
    //Debug Statement
    //print("mouth collided --food.js");

    //This function abstracts 'eat', as this function can ONLY be called if both the mouth closed event AND the mouth collision event are triggered.
    if (!eaten) {
        eat();
    }
}

var event = script.createEvent("MouthClosedEvent");
event.bind(onMouthClosed);

var event = script.createEvent("MouthOpenedEvent");
event.bind(onMouthOpened);

if (!script.behaviorScript) {
    return;
}


