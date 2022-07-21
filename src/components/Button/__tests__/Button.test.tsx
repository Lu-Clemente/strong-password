import React from "react";
import { render, screen } from '@testing-library/react-native';
import Button from "..";

describe('Button component', () => {
    it('should render the "confirm" button', () => {
        render(<Button />);

        const button = screen.getByText(/confirmar/i);

        expect(button).toBeTruthy();
    })
})