import * as mongoose from 'mongoose';
import CONFIG from './config';

mongoose.set('useCreateIndex', true);
const connection = `mongodb://${CONFIG.DB_HOST}/${CONFIG.DB}`;
export default (async () => {
  try {
    console.log(connection);
    await mongoose.connect(connection, { useNewUrlParser: true });
    console.log('The Conection is Ok');
  } catch (err) {
    console.log(`${err} Could not Connect to the Database. Exiting Now...`);
    process.exit();
  }
})();
