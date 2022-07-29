//
// LHL - Snake Game CLIENT (with server mods)
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m02w5/activities/1193?journey_step=34&workbook=8
// 2022-07-28 - v1.0
//


const { connect } = require("./client.js");
const { setupInput } = require("./input.js");
const globalVars = require("./globalVars.js");
const globalFns = require("./globalfn.js");

console.clear();
console.log(globalFns.redLine());
console.log(globalVars.conColors.conColorDim + " Welcome to..." + globalVars.conColors.conColorReset + globalVars.conColors.conColorGreen);
console.log(`      _______..__   __.     ___      __  ___  _______   ${globalVars.conColors.conColorRed}__${globalVars.conColors.conColorGreen}  `);
console.log(`     /       ||  \\ |  |    /   \\    |  |/  / |   ____| ${globalVars.conColors.conColorRed}|  |${globalVars.conColors.conColorGreen} `);
console.log(`    |   (----\\|   \\|  |   /  ^  \\   |  '  /  |  |__    ${globalVars.conColors.conColorRed}|  |${globalVars.conColors.conColorGreen} `);
console.log(`     \\   \\    |  . \\  |  /  /_\\  \\  |    <   |   __|   ${globalVars.conColors.conColorRed}|  |${globalVars.conColors.conColorGreen} `);
console.log(` .----)   |   |  |\\   | /  _____  \\ |  .  \\  |  |____  ${globalVars.conColors.conColorRed}|__|${globalVars.conColors.conColorGreen} `);
console.log(` |_______/    |__| \\__| __/     \\__\\ __|\\__\\ |_______| ${globalVars.conColors.conColorRed}(__)${globalVars.conColors.conColorGreen} `);
console.log(globalVars.conColors.conColorReset);

globalVars.gameStartTimeInSeconds = globalVars.setGameStartTime(); // start the clock on our game

//
// Get the game started - network connection & controller parsing
//
let conn = connect();
setupInput(conn);


// !TODO:  error check if missing REQUIRES instead of messy exit
// !TODO:  does snake server kick back a message after each item is eaten?? If so, add this to scoring!
// !TODO:  report final snake speed on game over
