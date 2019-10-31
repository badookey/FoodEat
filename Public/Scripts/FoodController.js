// -----JS CODE-----
// @input Asset.ObjectPrefab orangeContainer
// @input Component.Camera camera
// @input int numOrangesShouldSpawn
// @input Component.ScriptComponent highScoreController

script.createEvent("BrowsRaisedEvent").bind(onBrowRaise);

var numOrangesSpawned = 0;
var objectsSpawned = [];
var gameStarted = false;
function onBrowRaise(e) {
    if (script && !gameStarted) {
        spawnOranges();
        gameStarted = true;
    }
    
}
function spawnOranges() {
    if (numOrangesSpawned < script.numOrangesShouldSpawn) {
        var mySceneObject = createObjectFromPrefab();
        mySceneObject.getTransform().setWorldPosition(script.getTransform().getWorldPosition());
        objectsSpawned.push(mySceneObject);

        var delayedEvent = script.createEvent("DelayedCallbackEvent");
        delayedEvent.bind(spawnOranges);
        delayedEvent.reset(3.5);
        numOrangesSpawned++;
    }
    else { //Spawned max amount of oranges -- the game is over
        removeAllSpawnedObjects();
        script.highScoreController.api.endGame();
    }
    
}

function removeAllSpawnedObjects() {
    objectsSpawned.forEach(function (orangeContainer) {
        orangeContainer.destroy();
    });
    objectsSpawned = [];
}

function createObjectFromPrefab() {
    if (script.orangeContainer) {
        var instanceObject = script.orangeContainer.instantiate(script.getSceneObject());
        return instanceObject;
    }
    else {
        return undefined;
    }
}
