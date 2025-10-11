// src/test/pages/Home.spec.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import Home from '../../pages/Home';

// Se crea un router en memoria para envolver el componente Home.
// Esto proporciona el contexto de enrutamiento necesario para los componentes `Link` en el Footer.
const MockRouter = ({ children }) => {
  const router = createMemoryRouter(
    [{ path: '*', element: children }],
    { initialEntries: ['/'] }
  );
  return <RouterProvider router={router} />;
};

describe('Home Page', () => {
  it('renderiza el título de la página de inicio', () => {
    render(
      <MockRouter>
        <Home />
      </MockRouter>
    );
    // Busca el texto exacto que se muestra en el componente
    const title = screen.getByText('🌱 Bienvenido a Plantita');
    expect(title).toBeTruthy();
  });

  it('renderiza la sección "¿Quienes somos?"', () => {
    render(
      <MockRouter>
        <Home />
      </MockRouter>
    );
    const sectionTitle = screen.getByText('¿Quienes somos?');
    expect(sectionTitle).toBeTruthy();
  });

  it('renderiza el contenedor de Bootstrap', () => {
    render(
      <MockRouter>
        <Home />
      </MockRouter>
    );
    // Se localiza el contenedor a través de un elemento hijo conocido
    const container = screen.getByText('¿Quienes somos?').closest('div');
    expect(container).toHaveClass('container');
    expect(container).toHaveClass('my-5');
  });
});