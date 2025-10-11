import React from 'react';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import Blog from '../../pages/Blog';

// Mock de los datos del blog
const mockPosts = [
  {
    id: 1,
    titulo: "Bienvenidos a nuestro blog",
    autor: "Equipo Tienda",
    fecha: "2025-10-08",
    contenido: "En este espacio compartiremos novedades...",
    imagen: "https://example.com/imagen1.jpg",
  },
  {
    id: 2,
    titulo: "Nuevos lanzamientos de la temporada",
    autor: "Marketing",
    fecha: "2025-09-25",
    contenido: "Hemos incorporado productos innovadores...",
    imagen: "https://example.com/imagen2.jpg",
  },
];

// Mockear el módulo del blog usando el mismo método de tus ejemplos
beforeEach(() => {
  delete require.cache[require.resolve('../../data/blog.js')];
  require.cache[require.resolve('../../data/blog.js')] = {
    exports: { default: mockPosts },
  };
});

afterEach(() => {
  delete require.cache[require.resolve('../../data/blog.js')];
});

// Componente envolvente para el enrutador
const MockRouter = ({ children }) => {
  const router = createMemoryRouter(
    [{ path: '*', element: children }],
    { initialEntries: ['/blog'] }
  );
  return <RouterProvider router={router} />;
};

describe('Blog Page', () => {
  it('renderiza el título de la página del blog', () => {
    render(
      <MockRouter>
        <Blog />
      </MockRouter>
    );
    // Solución: Usamos getAllByText para obtener todos los elementos y seleccionamos el primero (el H2)
    const titles = screen.getAllByText('Blog');
    expect(titles[0]).toBeTruthy();
  });

  it('renderiza el subtítulo de la página del blog', () => {
    render(
      <MockRouter>
        <Blog />
      </MockRouter>
    );
    const subtitle = screen.getByText('Últimas publicaciones y novedades');
    expect(subtitle).toBeTruthy();
  });

  it('renderiza las tarjetas del blog usando los datos simulados', () => {
    render(
      <MockRouter>
        <Blog />
      </MockRouter>
    );
    const firstPostTitle = screen.getByText('Bienvenidos a nuestro blog');
    const secondPostTitle = screen.getByText('Nuevos lanzamientos de la temporada');
    expect(firstPostTitle).toBeTruthy();
    expect(secondPostTitle).toBeTruthy();
  });

  it('renderiza el pie de página', () => {
    render(
      <MockRouter>
        <Blog />
      </MockRouter>
    );
    const footerText = screen.getByText(/© 2025 Plantita. Todos los derechos reservados./);
    expect(footerText).toBeTruthy();
  });
});