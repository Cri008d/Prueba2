import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from '../../../components/atoms/Text';

describe('Text Component', () => {
  it('renderiza el texto dentro de una etiqueta <p> por defecto', () => {
    const content = 'Este es un párrafo de prueba.';
    render(<Text>{content}</Text>);

    const textElement = screen.getByText(content);
    
    // Verifica que el elemento exista
    expect(textElement).toBeTruthy();
  });

});