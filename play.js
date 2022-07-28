const { connect } = require("./client.js");
const { setupInput } = require("./input.js");
const globalVars = require("./globalVars.js");


console.clear();
console.log(globalVars.conColors.conColorBright + "Welcome to..." + globalVars.conColors.conColorGreen);

let conn = connect();


console.log (`     _______..__   __.     ___      __  ___  _______   ${globalVars.conColors.conColorRed}__${globalVars.conColors.conColorGreen}  `);
console.log (`    /       ||  \\ |  |    /   \\    |  |/  / |   ____| ${globalVars.conColors.conColorRed}|  |${globalVars.conColors.conColorGreen} `);
console.log (`   |   (----\\|   \\|  |   /  ^  \\   |  '  /  |  |__    ${globalVars.conColors.conColorRed}|  |${globalVars.conColors.conColorGreen} `);
console.log (`    \\   \\    |  . \\  |  /  /_\\  \\  |    <   |   __|   ${globalVars.conColors.conColorRed}|  |${globalVars.conColors.conColorGreen} `);
console.log (`.----)   |   |  |\\   | /  _____  \\ |  .  \\  |  |____  ${globalVars.conColors.conColorRed}|__|${globalVars.conColors.conColorGreen} `);
console.log (`|_______/    |__| \\__| __/     \\__\\ __|\\__\\ |_______| ${globalVars.conColors.conColorRed}(__)${globalVars.conColors.conColorGreen} `);
console.log(globalVars.conColors.conColorReset);


globalVars.gameStartTimeInSeconds = globalVars.setGameStartTime(); // start the clock on our game
setupInput(conn);



// !TODO:  keep the snake moving after each keypress until the next keypress
// !TODO:  bring our STYLE library as in INCLUDE and dress up the play.js output
// !TODO:  if directions changed are 0 tell the user they didn't even play - show the instructions
