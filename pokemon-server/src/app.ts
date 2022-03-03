import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import { pokemonRouter } from './pokemons/route';
import mongoose from 'mongoose';

const app = express();
const port = 5000;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/pokemons', pokemonRouter);

mongoose.connect('mongodb://data:27017/pokemons', () => {
  console.log('connected to database')
})

app.all('', (error: any, req: any, res: any, next: any) => {
  res.status(404).json({ error });
});

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});
