const directionsCounter = 0;
let secondsPlayed = 0;
let gameStartTimeInSeconds = 0;
let gameEndTimeInSeconds = 0;
conColors = { 
  conColorCyan:     "\x1b[36m", 
  conColorRed:      '\x1b[91m', 
  conColorGreen:    '\x1b[92m',
  conColorGrey:     '\x1b[90m',
  conColorReset:    "\x1b[0m",
  conColorBright:   "\x1b[1m",
  conColorDim:      "\x1b[2m", 
  conColorItalics:  "\x1b[3m", 
  conColorReverse:  "\x1b[7m"
}

//
// ! QUESTION - why can't I set the globalVars in this file from outside this file via these functions?
//
const setGameStartTime = () => {
  const date = new Date();
  return (Math.floor(date.getTime() / 1000));
};

const setGameEndTime = () => {
  const date = new Date();
  return (Math.floor(date.getTime() / 1000));
};

//setup FN to set the gameStartTimeInSeconds and gameEndTimeinSeconds

module.exports = {
  directionsCounter,
  secondsPlayed,
  gameStartTimeInSeconds,
  gameEndTimeInSeconds,
  setGameEndTime,
  setGameStartTime,
  conColors,
};
