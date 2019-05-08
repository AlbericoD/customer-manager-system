import * as winston from 'winston';
import app from './app';
import CONFIG from './config/config';
import './config/db';

app.listen(CONFIG.PORT, (err: any) => {
  if (err) {
    return winston.error(err);
  }

  Object.keys(CONFIG).forEach(key => winston.info(`${key}: ${CONFIG[key]}`));
  winston.info('Api is running...');
});
