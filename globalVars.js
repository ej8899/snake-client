//
// Setup global variables
//
const host = "localhost", port = 50541;
const directionsCounter = 0;
const consoleLine = '-'.repeat(process.stdout.columns / 2);
let userName = 'sNk';
let secondsPlayed = 0;
let gameStartTimeInSeconds = 0;
let gameEndTimeInSeconds = 0;
let conColors = {
  conColorCyan:     "\x1b[36m",
  conColorRed:      '\x1b[91m',
  conColorGreen:    '\x1b[92m',
  conColorGrey:     '\x1b[90m',
  conColorReset:    "\x1b[0m",
  conColorBright:   "\x1b[1m",
  conColorDim:      "\x1b[2m",
  conColorItalics:  "\x1b[3m",
  conColorReverse:  "\x1b[7m"
};

//
//  Setup Global Functions
// TODO - why can't I set the globalVars in this file from outside this file via these functions?
// TODO - research classes and .this to solve this
//
const setGameStartTime = () => {
  const date = new Date();
  gameStartTimeInSeconds = (Math.floor(date.getTime() / 1000));
  return (Math.floor(date.getTime() / 1000));
};

const setGameEndTime = () => {
  const date = new Date();
  return (Math.floor(date.getTime() / 1000));
};

module.exports = {
  host,
  port,
  userName,
  directionsCounter,
  consoleLine,
  secondsPlayed,
  gameStartTimeInSeconds,
  gameEndTimeInSeconds,
  setGameEndTime,
  setGameStartTime,
  conColors,
};
