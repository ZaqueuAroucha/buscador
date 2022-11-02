import { FiSearch } from 'react-icons/fi'
import './styles.css'

function App() {
  return (
    <div className="Container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="constainerInput">
        <input
        type="text"
        placeholder="Digite seu cep..."
        />

        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      <main className="main">
        <h2>CEP: 79003222</h2>

        <span>Rua Teste algum</span>
        <span>Complemento: Algum complemento</span>
        <span>Vila Rosa</span>
        <span>Campo Grande - MS</span>

      </main>

    </div>
  );
}

export default App;
