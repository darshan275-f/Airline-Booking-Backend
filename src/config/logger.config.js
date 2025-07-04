const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message,  timestamp }) => {
  return `${timestamp} : ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    myFormat
  ),
  transports: [new transports.Console(),
    new transports.File({filename:"Combined.log"})
  ]
});

module.exports=logger