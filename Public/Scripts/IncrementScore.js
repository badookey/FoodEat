// IncrementScore.js
// Version: 0.0.1
// Event: Tapped
// Description: Calls the increment score api on Tapped

// @input Component.ScriptComponent highScoreController

global.scBehaviorSystem.addCustomTriggerResponse("Increment Score", script.highScoreController.api.incrementScore);