
//
// REQUIRES
//
const net = require("net");
const globalVars = require("./globalVars.js");
const globalFns = require("./globalfn.js");

//
// Show our game menu
//
const showInstructions = function() {
  const colorCyBright = globalVars.conColors.conColorBright + globalVars.conColors.conColorCyan;
  const colorReset = globalVars.conColors.conColorReset;
  console.log(`   Connected to the server ${globalVars.conColors.conColorRed}=>  =>  =>${globalVars.conColors.conColorReset}  Enjoy your game!`);
  console.log(`\n Move with ${colorCyBright}w${colorReset} - Up | ${colorCyBright}a${colorReset} - Left | ${colorCyBright}d${colorReset} - Right | ${colorCyBright}s${colorReset} - Down | ${colorCyBright}x${colorReset} - Exit`);
  console.log(`              ${globalVars.conColors.conColorGreen}1, 2, 3${globalVars.conColors.conColorReset} = send snek a message\n`);
};


//
// establishes a connection with the game server
//
const connect = function() {
  const conn = net.createConnection({
    host: globalVars.host,
    port: globalVars.port,
  });
  conn.on('error', (errorCode) => {
    console.log(`${globalVars.conColors.conColorRed}  GAME START ERROR: ${globalVars.conColors.conColorCyan}${errorCode}${globalVars.conColors.conColorReset}`);
    console.log(`${globalVars.conColors.conColorDim}     (did you forget to start the game server, perhaps?)\n${globalVars.conColors.conColorReset}`);
    process.exit();
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  //
  // TELL Client we're connected
  //
  conn.on("connect", showInstructions);

  //
  // Monitor INCOMMING DATA stream
  //
  conn.on("data", (data) => {
    //
    // Is the user "ded"
    //
    if (data.search("ded") > 0) { // let's force program to exit if user is not actively playing
      if (globalVars.directionsCounter === 0) {
        console.log(`   ${globalVars.conColors.conColorRed}Did you fall asleep with Snek?  You didn't move at all!${globalVars.conColors.conColorReset}`);
      } else {
        console.log(`             ${globalVars.conColors.conColorRed}* * *  G A M E  O V E R  * * *${globalVars.conColors.conColorReset}`);
        if (data.search("idled") > 0) {
          console.log("                 You stopped playing!\n");
        } else {
          console.log("                      You CRASHED!\n");
        }
        let secondsplaying = globalVars.setGameEndTime() - globalVars.gameStartTimeInSeconds;
        
        globalFns.endGameSummary(secondsplaying);
      }
      console.log();
      process.exit();
    } else {
      console.log(globalVars.conColors.conColorCyan + "\tMessage: " + globalVars.conColors.conColorGreen + data + globalVars.conColors.conColorReset); // unknown message so just show it
    }
  });
  
  // send our initials to the snake server
  let setupName = 'Name: ' + globalVars.userName;
  conn.write(setupName);

  return conn;
};



module.exports = {
  connect
};