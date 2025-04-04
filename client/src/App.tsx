import { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import Layout from './components/layout/Layout';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>

      <div className="app-layout">
        <main className="main-content">
          {/* Todo tu contenido existente */}
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          {/* ... resto de tu contenido ... */}
        </main>
      </div>
    </Layout>
  );
}

export default App;