let connection;
const globalVars = require("./globalVars.js");
const globalFns = require("./globalfn.js");

// SCORING variable
let directionChanges = 0;
const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  connection = conn;
  
  let movementInterval = setInterval(function() {  }, 1); // just initialize with empty function
  const initialSnakeSpeed = 200;  // this is in milliseconds
  let snakeSpeed = initialSnakeSpeed; // this is in milliseconds

  //  stdin.on('data', function handleUserInput(keyPress) {
  stdin.on('data', (keyPress) => {
    // SYNC movement counting to our global variables
    globalVars.directionsCounter = directionChanges;
    
    //
    // MOVEMENT and MAIN CONTROL
    //
    
    //
    // Deal with a graceful exit & give user their score details
    //
    if (keyPress === '\u0003' || keyPress === '\u0078') { // ctrl-c or x to exit
      let secondsplaying = globalVars.setGameEndTime() - globalVars.gameStartTimeInSeconds;
      console.log(`              * * * ${globalVars.conColors.conColorCyan}Thanks for Playing${globalVars.conColors.conColorReset} * * *`);
      globalFns.endGameSummary(secondsplaying);
      process.exit();
    }

    //
    // increase difficulty as game progresses
    //
    snakeSpeed = initialSnakeSpeed - (directionChanges); // the more you move, the faster snake gets
    if (snakeSpeed < 25) { // cap the speed difficulty at 25 milliseconds
      snakeSpeed = 25;
    }

    //
    // actual movements
    //
    if (keyPress === '\u0061') {  // 'a'
      clearInterval(movementInterval);  // new keypress, so clear prior movement interval
      movementInterval = setInterval(function() {
        conn.write('Move: left');
      }, snakeSpeed);
      directionChanges++;
    }
    if (keyPress === '\u0077') {  // 'w'
      clearInterval(movementInterval);  // new keypress, so clear prior movement interval
      movementInterval = setInterval(function() {
        conn.write('Move: up');
      }, snakeSpeed);
      directionChanges++;
    }
    if (keyPress === '\u0073') {  // 's'
      clearInterval(movementInterval);  // new keypress, so clear prior movement interval
      movementInterval = setInterval(function() {
        conn.write('Move: down');
      }, snakeSpeed);
      directionChanges++;
    }
    if (keyPress === '\u0064') {  // 'd'
      clearInterval(movementInterval);  // new keypress, so clear prior movement interval
      movementInterval = setInterval(function() {
        conn.write('Move: right');
      }, snakeSpeed);
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