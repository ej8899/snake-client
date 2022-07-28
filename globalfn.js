const globalVars = require("./globalVars.js");

const endGameSummary = (secondsplaying) => {
  console.log(globalVars.conColors.conColorGreen + "          You made " + globalVars.directionsCounter + " moves, and lasted " + secondsplaying + " seconds!" + globalVars.conColors.conColorReset);
  console.log(globalVars.conColors.conColorDim + globalVars.conColors.conColorRed + '-------------------------------------------------------------' + globalVars.conColors.conColorReset);
};


module.exports = {
  endGameSummary,
};
