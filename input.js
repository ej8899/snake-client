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
  
  let movementInterval = setInterval(function() {  }, 1); // just initialize with empty function
  let snakeSpeed = 200;  // this is in milliseconds

  stdin.on('data', function handleUserInput(keyPress) {
    
    // SYNC movement counting to our global variables
    globalVars.directionsCounter = directionChanges;
    
    //
    // MOVEMENT and MAIN CONTROL 
    //
    
    if (keyPress === '\u0003' || keyPress === '\u0078') { // ctrl-c or x to exit
      console.log("later!");
      console.log("You changed direction " + directionChanges + " times!");
      
      let secondsplaying = globalVars.setGameEndTime() - globalVars.gameStartTimeInSeconds;
      console.log("You lasted " + secondsplaying + " seconds!");
      process.exit();
    }
    if (keyPress === '\u0061' ) {  // 'a'
      clearInterval(movementInterval);  // new keypress, so clear prior movement interval
      movementInterval = setInterval(function() { conn.write('Move: left'); }, snakeSpeed);
      directionChanges++;
    }
    if (keyPress === '\u0077') {  // 'w'
      clearInterval(movementInterval);  // new keypress, so clear prior movement interval
      movementInterval = setInterval(function() { conn.write('Move: up'); }, snakeSpeed);
      directionChanges++;
    }
    if (keyPress === '\u0073') {  // 's'
      clearInterval(movementInterval);  // new keypress, so clear prior movement interval
      movementInterval = setInterval(function() { conn.write('Move: down'); }, snakeSpeed);
      directionChanges++;
    }
    if (keyPress === '\u0064') {  // 'd'
      clearInterval(movementInterval);  // new keypress, so clear prior movement interval
      movementInterval = setInterval(function() { conn.write('Move: right'); }, snakeSpeed);
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
      conn.write('Say: No step on snek!');
    }
    if (keyPress === '\u0033') {  // 2
      conn.write('Say: Keep calm & snake on!');
    }
  });
  stdin.resume();
  
  return stdin;
};



module.exports = {
  setupInput,
};