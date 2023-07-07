const levels = {
  DEBUG: 0,
  INFO: 1,
  ERROR: 2
};
// Текущий уровень логгирования (можно изменить по необходимости)
const currentLogLevel = levels.ERROR;
// Функция логгирования
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
};"  утсанавливая уровень я регулирую будут ли отображаться те или иные логи, 

додумался не сам, вчера вечером смотрел как работают node.js логгеры через библиотеки, потом нашел статью о фронтэнде где увидел эту цитату

In short, you need an abstraction that enables you to establish conventions and control logs. That abstraction can be as simple as:

const MyLogger = (...args) => {
  console.log(...args);
};
