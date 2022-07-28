let connection;
let keyPress;


const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  connection = conn;
  stdin.on('data', function handleUserInput(keyPress) {
    console.log("IN INPUT PARSING");
    // MOVEMENT and MAIN CONTROL
    if (keyPress === '\u0003') { // ctrl-c to exit
      console.log("later!");
      process.exit();
    }
    if (keyPress === '\u0061' ) {  // 'a'  
      conn.write('Move: left');
    }
    if (keyPress === '\u0077') {  // 'w'
      conn.write('Move: up');
    }
    if (keyPress === '\u0073') {  // 's'
      conn.write('Move: down');
    }
    if (keyPress === '\u0064') {  // 'd'
      conn.write('Move: right');
    }


    // SPECIAL COMMANDS
    // more UNICODE chars: https://en.wikipedia.org/wiki/List_of_Unicode_characters
    if (keyPress === '\u0070') {  // p
      conn.write('Say: ARRRRGGGHH!');
    }
  });
  stdin.resume();
  
  return stdin;
};



module.exports = {
  setupInput,
};