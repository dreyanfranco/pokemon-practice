import mongoose from 'mongoose';
import { PokemonTypes } from './interfaces/enums/PokemonTypes.enum';
import { Pokemon } from './interfaces/Pokemon.interface';



const Schema = mongoose.Schema;

const pokemonSchema = new Schema <Pokemon>({
    index: {
        type: String,
    },
    name: {
        type: String,
        required: true,
        default: 'Unknown'
    },
    type: {
        type: String,
        enum: PokemonTypes,
        default: PokemonTypes.electric
    },
    imageUrl: {
        type: String
    },
    health: {
        type: Number
    }
})


const Pokemon = mongoose.model('Pokemon', pokemonSchema)
export default Pokemon