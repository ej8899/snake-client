const { connect } = require("./client.js");
const { setupInput } = require("./input.js");
const globalVars = require("./globalVars.js");


console.clear();
console.log(globalVars.conColors.conColorDim + " Welcome to..." + globalVars.conColors.conColorReset + globalVars.conColors.conColorGreen);
console.log (`      _______..__   __.     ___      __  ___  _______   ${globalVars.conColors.conColorRed}__${globalVars.conColors.conColorGreen}  `);
console.log (`     /       ||  \\ |  |    /   \\    |  |/  / |   ____| ${globalVars.conColors.conColorRed}|  |${globalVars.conColors.conColorGreen} `);
console.log (`    |   (----\\|   \\|  |   /  ^  \\   |  '  /  |  |__    ${globalVars.conColors.conColorRed}|  |${globalVars.conColors.conColorGreen} `);
console.log (`     \\   \\    |  . \\  |  /  /_\\  \\  |    <   |   __|   ${globalVars.conColors.conColorRed}|  |${globalVars.conColors.conColorGreen} `);
console.log (` .----)   |   |  |\\   | /  _____  \\ |  .  \\  |  |____  ${globalVars.conColors.conColorRed}|__|${globalVars.conColors.conColorGreen} `);
console.log (` |_______/    |__| \\__| __/     \\__\\ __|\\__\\ |_______| ${globalVars.conColors.conColorRed}(__)${globalVars.conColors.conColorGreen} `);
console.log(globalVars.conColors.conColorReset);

globalVars.gameStartTimeInSeconds = globalVars.setGameStartTime(); // start the clock on our game

let conn = connect();
setupInput(conn);


// !TODO:  error check if missing REQUIRES instead of messy exit
// !TODO:  speed up snake after every direction changed
// !TODO:  does snake server kick back a message after each item is eaten?? If so, add this to scoring!
