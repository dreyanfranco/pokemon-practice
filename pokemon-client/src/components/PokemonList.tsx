import { useEffect, useState } from 'react';
import { getPokemons } from '../services/pokemon.service';
import { Pokemon } from './Pokemon';

import { Row, Col } from 'antd';

export const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);


  useEffect(() => {
    getPokemons().then((response) => {
      setPokemonData(response.data);
    });
  }, []);

  return (
    <>
      {pokemonData.length > 0 ? (
        <Row>
          {pokemonData.map((pokemon: any) => {
            return (
              <Col sm={12} xl={6} key={pokemon._id}><Pokemon {...pokemon}/></Col>
            );
          })}
        </Row>
      ) : (
        <div>No pokemon Found</div>
      )}
    </>
  );
};
