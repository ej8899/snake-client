let connection;
let keyPress;
const globalVars = require("./globalVars.js");

// SCORING variable
let directionChanges = 0;
const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  connection = conn;
  stdin.on('data', function handleUserInput(keyPress) {
    
    // SYNC movement counting to our global variables
    globalVars.directionsCounter = directionChanges;

    //
    // MOVEMENT and MAIN CONTROL 
    //
    if (keyPress === '\u0003') { // ctrl-c to exit
      console.log("later!");
      console.log("You changed direction " + directionChanges + " times!");
      
      let secondsplaying = globalVars.setGameEndTime() - globalVars.gameStartTimeInSeconds;
      console.log("You lasted " + secondsplaying + " seconds!");
      process.exit();
    }
    if (keyPress === '\u0061' ) {  // 'a'  
      conn.write('Move: left');
      directionChanges++;
    }
    if (keyPress === '\u0077') {  // 'w'
      conn.write('Move: up');
      directionChanges++;
    }
    if (keyPress === '\u0073') {  // 's'
      conn.write('Move: down');
      directionChanges++;
    }
    if (keyPress === '\u0064') {  // 'd'
      conn.write('Move: right');
      directionChanges++;
    }

    //
    // SPECIAL COMMANDS
    // more UNICODE chars for reference: https://en.wikipedia.org/wiki/List_of_Unicode_characters
    //
    if (keyPress === '\u0031') {  // 1
      conn.write('Say: ARRRRGGGHH!');
    }
    if (keyPress === '\u0032') {  // 2
      conn.write('Say: Don\'t step on snek!');
    }
  });
  stdin.resume();
  
  return stdin;
};



module.exports = {
  setupInput,
};