// IncrementScore.js
// Version: 0.0.1
// Event: Lens Turned on
// Description: Calls the increment score api when an object is eaten
// Initialization: This script must be set to Lens Turned on, as it cannot be assigned during initialization as the highScoreController and global variables are created then

// @input Component.ScriptComponent highScoreController


// On global trigger of "Increment Score", Call the highscorecontroller's incrementScore function
global.scBehaviorSystem.addCustomTriggerResponse("Increment Score", script.highScoreController.api.incrementScore);