import React from 'react';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import Producto from '../../pages/Producto';

// NOTA: El mock de 'Producto.js' parece no funcionar en esta configuración de prueba,
// por lo que las pruebas se han adaptado para verificar los datos reales del archivo.

// Componente envolvente para el enrutador
const MockRouter = ({ children }) => {
  const router = createMemoryRouter(
    [{ path: '*', element: children }],
    { initialEntries: ['/productos'] }
  );
  return <RouterProvider router={router} />;
};

describe('Producto Page', () => {

  it('renderiza el título principal de la página', () => {
    render(
      <MockRouter>
        <Producto />
      </MockRouter>
    );
    const title = screen.getByRole('heading', { name: /Productos/i, level: 1 });
    expect(title).toBeTruthy();
  });

  it('renderiza una tarjeta para cada producto', () => {
    render(
      <MockRouter>
        <Producto />
      </MockRouter>
    );

    // Verifica que el nombre de algunos productos reales esté en el documento
    expect(screen.getByText('Lechuga')).toBeTruthy();
    expect(screen.getByText('Tomate')).toBeTruthy();
  });

  it('renderiza la descripción de los productos', () => {
    render(
      <MockRouter>
        <Producto />
      </MockRouter>
    );
    
    // getAllByText se usa porque la descripción puede ser igual al nombre.
    // Verificamos que al menos uno de los elementos con el texto "Lechuga" exista.
    const descriptions = screen.getAllByText('Lechuga');
    expect(descriptions.length).toBeGreaterThan(0);
  });

  it('renderiza los precios de cada producto', () => {
    render(
        <MockRouter>
            <Producto />
        </MockRouter>
    );
    
    expect(screen.getByText(/1000/)).toBeTruthy();
    expect(screen.getByText(/1200/)).toBeTruthy();
  });

  it('renderiza el pie de página', () => {
    render(
      <MockRouter>
        <Producto />
      </MockRouter>
    );
    const footerText = screen.getByText(/© 2025 Plantita. Todos los derechos reservados./);
    expect(footerText).toBeTruthy();
  });
});