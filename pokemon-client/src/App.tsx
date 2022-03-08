import { PokemonList } from './components/PokemonList';
import { Typography } from 'antd';

const { Title } = Typography;

function App() {
  return (
    <div>
      <Title>Lista de Pokemon</Title>
      <div>
        <PokemonList />
      </div>
    </div>
  );
}

export default App;
