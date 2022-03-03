import { useEffect, useState } from 'react';
import { getPokemons } from '../services/pokemon.service';
import { Pokemon } from './Pokemon';

import { Row, Col } from 'antd';


export const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    getPokemons().then((response) => {
      setPokemonData(response.data);
      // console.log(response.data)
    });
    // axios
    //   .get('http://localhost:3000/pokemons/', {
    //     // headers: { 'Access-Control-Allow-Origin': '*' },
    //   })
    //   .then((res) => {
    //     setPokemonData(res.data);
    //   });
  }, []);

  return (
    <>
      {pokemonData.length > 0 ? (
        <div>
          <Row>
            {pokemonData.map((pokemon: any) => {
              return (
                <Col sm={12} xl={6}><Pokemon key={pokemon._id} {...pokemon}/></Col>
              );
            })}
          </Row>
        </div>
      ) : (
        <div>No pokemon Found</div>
      )}
    </>
  );
};
