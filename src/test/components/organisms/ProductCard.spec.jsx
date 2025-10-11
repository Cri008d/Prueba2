import React from 'react';
import { render, screen} from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import ProductCard from '../../../components/organisms/ProductCard';

// Componente envolvente para simular el enrutador
const MockRouter = ({ children, mockNavigate }) => {
  const router = createMemoryRouter(
    [{ path: '*', element: children }],
    { initialEntries: ['/'] }
  );
  // Reemplazamos la función de navegación del router por nuestro espía
  router.navigate = mockNavigate;
  return <RouterProvider router={router} />;
};

describe('ProductCard Component', () => {
  // Creamos un espía de Jasmine para la función de navegación
  const mockNavigate = jasmine.createSpy('navigate');

  const mockProduct = {
    id: 1,
    name: 'Producto de Prueba',
    description: 'Descripción de prueba.',
    price: 9990,
    image: 'test-image.jpg',
  };

  it('renderiza la información del producto correctamente', () => {
    render(
      <MockRouter mockNavigate={mockNavigate}>
        <ProductCard product={mockProduct} />
      </MockRouter>
    );

    // Verifica que el nombre y el precio se muestren
    expect(screen.getByText(mockProduct.name)).toBeTruthy();
    expect(screen.getByText(/9990/)).toBeTruthy(); // Busca el precio

    // Verifica que la imagen se renderice con el texto alternativo correcto
    const image = screen.getByRole('img', { name: mockProduct.name });
    expect(image).toBeTruthy();
    expect(image.getAttribute('src')).toBe(mockProduct.image);
  });

  it('renderiza el botón de "Ver detalles"', () => {
    render(
      <MockRouter mockNavigate={mockNavigate}>
        <ProductCard product={mockProduct} />
      </MockRouter>
    );
    const button = screen.getByRole('button', { name: /Ver detalles/i });
    expect(button).toBeTruthy();
    expect(button).toHaveClass('btn-primary');
  });

  it('navega a la página de detalles al hacer clic en el botón', () => {
    render(
      <MockRouter mockNavigate={mockNavigate}>
        <ProductCard product={mockProduct} />
      </MockRouter>
    );
    
    

    
  });
});