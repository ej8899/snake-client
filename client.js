
// establishes a connection with the game server
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // TELL Client we're connected
  conn.on("connect",(stream) => { console.log("Connected to the game server...\n\tEnjoy your session!\n"); });

  // show data coming from server
  conn.on("data", (data) => { console.log (data + '\n'); });
  
  // send our initials to the snake server
  conn.write("Name: EJz");

  return conn;
};


module.exports = {
  connect
};