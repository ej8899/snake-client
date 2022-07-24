
// establishes a connection with the game server
const net = require("net");
const connects = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // TELL Client we're connected
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // send our initials to the snake server
  conn.write("Name: EJz");
  // conn.write("Move: down");
 

  return conn;
};


module.exports = {
  connect: connects,
};