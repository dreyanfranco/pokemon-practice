import { PokemonList } from './components/PokemonList';
import { Typography } from 'antd';

const { Title } = Typography;

function App() {
  return (
    <div>
      <Title>Pokemon List</Title>
      <div>
        <PokemonList />
      </div>
    </div>
  );
}

export default App;
