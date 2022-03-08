import mongoose from "mongoose";

mongoose.connect('mongodb://mongo:27017/pokemons', () => {
    console.log('connected to database')
})

export default mongoose