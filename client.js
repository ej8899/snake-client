
// establishes a connection with the game server
const net = require("net");
const connects = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.write("Name: EJz");
  return conn;
};


module.exports = {
  connect: connects,
};