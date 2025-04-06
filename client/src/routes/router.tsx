import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import SolicitudPage from '../pages/Solicitud';
import Inicio from '../pages/Inicio';
import Contacto from '../pages/Contacto';
import EcoHeroes from '../pages/EcoHeroes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Inicio />,
      },
      {
        path: 'solicitar-recojo',
        element: <SolicitudPage />,
      },
      {
        path: 'ecoheroes',
        element: <EcoHeroes />,
      },
      {
        path: 'contacto',
        element: <Contacto />,
      },
    ],
  },
]);