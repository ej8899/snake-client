const net = require("net");



  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
  });


  return conn;
};

console.log("Connecting ...");
connect();

