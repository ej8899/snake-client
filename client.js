

// REQUIRES
const net = require("net");
const globalVars = require("./globalVars.js");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // TELL Client we're connected
  // conn.on("connect",(stream) => { console.log("  Connected to the server =>  =>  =>  Enjoy your game!\n"); });
  conn.on("connect", showInstructions);

  // show data coming from server
  conn.on("data", (data) => { 
    console.log (data + '\n');
    if(data.search("ded") > 0) { // let's force program to exit if user is not actively playing
      console.log("Directions changed: " + globalVars.directionsCounter)
      let secondsplaying = globalVars.setGameEndTime() - globalVars.gameStartTimeInSeconds;
      console.log("You lasted " + secondsplaying + " seconds!");
      process.exit();
    }
});
  
  // send our initials to the snake server
  conn.write("Name: EJz");

  return conn;
};

function showInstructions() {
  const colorCyBright = globalVars.conColors.conColorBright + globalVars.conColors.conColorCyan;
  const colorReset = globalVars.conColors.conColorReset;
  console.log(`   Connected to the server ${globalVars.conColors.conColorRed}=>  =>  =>${globalVars.conColors.conColorReset}  Enjoy your game!`);
  console.log(`\n Move with ${colorCyBright}w${colorReset} - Up | ${colorCyBright}a${colorReset} - Left | ${colorCyBright}d${colorReset} - Right | ${colorCyBright}s${colorReset} - Down | ${colorCyBright}ctrl-c${colorReset} Exit`);
}

module.exports = {
  connect
};