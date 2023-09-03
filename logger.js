const levels = {
  DEBUG: 0,
  INFO: 1,
  ERROR: 2
};
// Current logging level (can be changed if necessary)
const currentLogLevel = levels.ERROR;
const logger = {
  debug: (message) => {
    if (currentLogLevel <= levels.DEBUG) {
      console.debug(message);
    }
  },
  info: (message) => {
    if (currentLogLevel <= levels.INFO) {
      console.info(message);
   }
  },
  error: (message) => {
    if (currentLogLevel <= levels.ERROR) {
      console.error(message);
    }
  }
};


//I didn't think of it myself, last night I watched how node.js loggers work through libraries, then I found an article about the frontend where I saw this quote

//In short, you need an abstraction that enables you to establish conventions and control logs. That abstraction can be as simple as:

//const MyLogger = (...args) => {
//  console.log(...args);
//};
