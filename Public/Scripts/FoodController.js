// -----JS CODE-----
// @input Asset.ObjectPrefab orangeContainer
// @input Component.Camera camera
script.createEvent("TouchStartEvent").bind(onTouchStart);
function onTouchStart(e) {
    print("Screen Touched");
    if (script.camera) {
        var touchPosition = e.getTouchPosition();
        var worldPosition = script.camera.screenSpaceToWorldSpace(touchPosition, 0);
        var mySceneObject = createObjectFromPrefab();
        mySceneObject.getTransform().setWorldPosition(worldPosition);
    }
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
