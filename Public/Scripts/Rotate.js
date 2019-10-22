// -----JS CODE-----
var transform = script.getTransform();
var rotation = transform.getLocalRotation();
var rotateBy = quat.angleAxis(Math.PI * getDeltaTime(), vec3.up());
rotation = rotation.multiply(rotateBy);
transform.setLocalRotation(rotation);
