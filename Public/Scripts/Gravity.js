// -----JS CODE-----
var transform = script.getTransform();
var pos = transform.getWorldPosition();
pos.y -= 0.1;
transform.setWorldPosition(pos);