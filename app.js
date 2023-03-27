const express= require("express");
const res = require("express/lib/response");
const app= express();
const fs = require('fs');
const winston = require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'calculate-service' },
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });



app.get('/subtract', (req, res) => {
  const n1 = parseFloat(req.query.n1);
  const n2 = parseFloat(req.query.n2);

  if (isNaN(n1) || isNaN(n2)) {
    logger.error('Invalid input');
    return res.status(400).json({ error: 'Invalid' });
  }

  const result = n1 - n2;

  logger.log({
    level: 'info',
    message: `New subtraction operation requested: ${n1} - ${n2} = ${result}`
  });

  res.json({ result });
});

app.get('/add', (req, res) => {
  const n1 = parseFloat(req.query.n1);
  const n2 = parseFloat(req.query.n2);

  if (isNaN(n1) || isNaN(n2)) {
    logger.error('Invalid input');
    return res.status(400).json({ error: 'Invalid' });
  }

  const result = n1 + n2;

  logger.log({
    level: 'info',
    message: `New addition operation requested: ${n1} + ${n2} = ${result}`
  });

  res.json({ result });
});

app.get('/divide', (req, res) => {
  const n1 = parseFloat(req.query.n1);
  const n2 = parseFloat(req.query.n2);

  if (isNaN(n1) || isNaN(n2)) {
    logger.error('Invalid input');
    return res.status(400).json({ error: 'Invalid' });
  }

  const result = n1 / n2;

  logger.log({
    level: 'info',
    message: `New divition operation requested: ${n1} / ${n2} = ${result}`
  });

  res.json({ result });
});

app.get('/multiply', (req, res) => {
  const n1 = parseFloat(req.query.n1);
  const n2 = parseFloat(req.query.n2);

  if (isNaN(n1) || isNaN(n2)) {
    logger.error('Invalid input');
    return res.status(400).json({ error: 'Invalid' });
  }

  const result = n1 * n2;

  logger.log({
    level: 'info',
    message: `New multiplication operation requested: ${n1} * ${n2} = ${result}`
  });

  res.json({ result });
});

const port=3000;
app.listen(port,()=> {
    console.log("hello i'm listening to port " +port);
})