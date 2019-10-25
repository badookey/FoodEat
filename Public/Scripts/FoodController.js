// -----JS CODE-----
// @input Asset.ObjectPrefab orangeContainer
// @input Component.Camera camera
script.createEvent("BrowsRaisedEvent").bind(onBrowRaise);
function onBrowRaise(e) {
    if (script) {
        spawnOranges();
    }
    
}
function spawnOranges() {
    var mySceneObject = createObjectFromPrefab();
    mySceneObject.getTransform().setWorldPosition(script.getTransform().getWorldPosition());
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
