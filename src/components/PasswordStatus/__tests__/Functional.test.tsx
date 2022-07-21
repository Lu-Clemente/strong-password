import React from "react";
import { render, screen } from '@testing-library/react-native';
import PasswordStatus from "../index";

describe('Button component', () => {
    it('should render the "confirm" button', () => {
        render(<PasswordStatus password="" />);

        const button = screen.getByText(/confirmar/i);

        expect(button).toBeTruthy();
    })
})