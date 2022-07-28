//
// Global functions
//


const globalVars = require("./globalVars.js");

//
// show an end game summary and their 'scoring' based on seconds played & moves made
//
const endGameSummary = (secondsplaying) => {
  console.log(globalVars.conColors.conColorGreen + "          You made " + globalVars.directionsCounter + " moves, and lasted " + secondsplaying + " seconds!" + globalVars.conColors.conColorReset);
  console.log(globalVars.conColors.conColorDim + globalVars.conColors.conColorRed + '-------------------------------------------------------------' + globalVars.conColors.conColorReset);
};


module.exports = {
  endGameSummary,
};
