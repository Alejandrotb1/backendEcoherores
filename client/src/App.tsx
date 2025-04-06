import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet /> {/* Aquí se renderizarán las páginas */}
      </main>
      <Footer />
    </div>
  );
}

export default App;