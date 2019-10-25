// -----JS CODE-----
// @input Asset.ObjectPrefab orangeContainer
// @input Component.Camera camera
// @input int numOrangesShouldSpawn
script.createEvent("BrowsRaisedEvent").bind(onBrowRaise);

var numOrangesSpawned = 0;
function onBrowRaise(e) {
    if (script) {
        spawnOranges();
    }
    
}
function spawnOranges() {
    if (numOrangesSpawned < script.numOrangesShouldSpawn) {
        var mySceneObject = createObjectFromPrefab();
        mySceneObject.getTransform().setWorldPosition(script.getTransform().getWorldPosition());
        var delayedEvent = script.createEvent("DelayedCallbackEvent");
        delayedEvent.bind(spawnOranges);
        delayedEvent.reset(3.5);
        numOrangesSpawned++;
    }
    
}

spawnOranges();


function createObjectFromPrefab() {
    if (script.orangeContainer) {
        var instanceObject = script.orangeContainer.instantiate(script.getSceneObject());
        return instanceObject;
    }
    else {
        return undefined;
    }
}
