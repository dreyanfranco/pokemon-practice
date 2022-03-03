import { Router } from 'express';
import Pokemon from '../models/pokemon.model';
import mongoose from 'mongoose';
import { body, validationResult } from 'express-validator';


export const pokemonRouter = Router();

// get all pokemons

pokemonRouter.get('', async (req, res) => {
  try {
    const pokemonList = await Pokemon.find()
    return res.status(200).json(pokemonList)
  } catch (error) {
    res.status(500).json(error)
  } finally {
    // se ejecuta todo y funciono
  }

  // .then((response: any) => res.json(response))
  // .catch((error:any) => res.status(500).json(error))
  // const pokemons = [{ index: 1, name: 'test' }];
  // console.log('test');
});

//get one pokemon by id

pokemonRouter.get('/:pokemon_id', async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.pokemon_id)) {
    res.status(404).json({ message: 'Invalid ID' })
    return
  }
  try {
    const pokemonId = await Pokemon.findById(req.params.pokemon_id)
    return res.status(200).json(pokemonId)
  } catch (error) {
    res.status(500).json(error)
  }
})

// delete one pokemon

pokemonRouter.delete('/:pokemon_id', async (req, res) => {
  try {
    const pokemonIdAndDelete = await Pokemon.findByIdAndDelete(req.params.pokemon_id)
    return res.status(200).json(pokemonIdAndDelete)
  } catch (error) {
    res.status(500).json(error)
  }
})

// edit a pokemon

pokemonRouter.put('/:pokemon_id', async (req, res) => {

  try {
    const pokemonEditById = await Pokemon.findByIdAndUpdate(req.params.pokemon_id, req.body)
    return res.status(200).json(pokemonEditById)
  } catch (error) {
    res.status(500).json(error)
  }
})

// create one pokemon

pokemonRouter.post('', async (req, res) => {
  const newPokemonData = req.body
  // console.log({newPokemonData})
  try {
    const newPokemon = await Pokemon.create(newPokemonData);
    return res.status(200).json(newPokemon)

  } catch (error) {
    res.status(500).json(error)
  }
  // Pokemon
  //   .create(req.body)
  //   .then((response: any) => res.json(response))
  //   .catch((error: any) => res.status(500).json(error))
})



