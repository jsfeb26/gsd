import mongoose from 'mongoose';
import env from '../environment';
// import config from './config.json';

// mongoose.connect(config[env].url);
mongoose.connect("mongodb://localhost/gsd-dev");
