import { Pokemon as PokemonInterface } from "../interfaces/Pokemon.interface";

import { Card, Button } from 'antd';

const { Meta } = Card;

export const Pokemon = ({ id, index, name, type, imageUrl }: PokemonInterface) => {
  return (
    <>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt={name}
            src={imageUrl}
          />
        }
      >
        <Meta
          title={name}
          description={type}
        />
      </Card>
      {/* <Button danger>
        Delete
      </Button> */}
    </>

  );
};


