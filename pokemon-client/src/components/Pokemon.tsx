import { Pokemon as PokemonInterface } from "../interfaces/Pokemon.interface";

import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined } from '@ant-design/icons';

const { Meta } = Card;

export const Pokemon = ({ id, index, name, type, imageUrl }: PokemonInterface) => {
  return (
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt={name}
            src={imageUrl}
          />
        }
        actions={[
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          title={name}
          description={type}
        />
      </Card>

  );
};


