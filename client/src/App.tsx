import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        {/* Espacio para tu contenido */}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>Desarrollado con Vite + React | © 2023 EcoHeroes</p>
        </div>
      </footer>
    </div>
  );
}

export default App;