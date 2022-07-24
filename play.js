
const connect = require("./client.js");


// establishes a connection with the game server


console.log("Connecting ...");
connect.connect();

// connect.conn.write("Name: EJz");

// "Move: up"



const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput(key));
  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {
  // your code here
  if (key === '\u0003') { // x or ctrl-c to exit
    process.exit();
  }
};