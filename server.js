import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import session from 'express-session';
import userRoutes from './routes/user.js';
import historiqueRoutes from './routes/historiqueRoutes.js';
import { errorHandler, notFoundError } from './middlewares/error_handler.js';
import dotenv from 'dotenv';


dotenv.config();
const app = express();
const server = http.createServer(app);

app.use(session({ secret: 'yoursecret', resave: false, saveUninitialized: false }));

const port = process.env.PORT || 9090;
const databaseName = 'BG';
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose
  .connect(`mongodb+srv://salimrabbaoui:SalimLotfi@cluster0.a2575dc.mongodb.net/${databaseName}`)
  .then(() => {
    console.log(`Connected to ${databaseName}`);
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log('Middleware just ran!');
  next();
});

app.use('/gse', (req, res, next) => {
  console.log('Middleware just ran a gse route!');
  next();
});

app.use('/user', userRoutes);
app.use('/historique', historiqueRoutes);

app.use(errorHandler);
app.use(notFoundError);


server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
