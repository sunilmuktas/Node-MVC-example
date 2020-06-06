import App from './app';
import PostsController from './posts/posts.controller';
import * as mongoose from 'mongoose';
import '.env/config';

const app = new App(
  [
    new PostsController(),
  ],
  5000,
);


 
const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_PATH,
} = process.env;
 
mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`);
 
app.listen();