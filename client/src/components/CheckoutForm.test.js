import React from "react";
import { render, screen } from "@testing-library/react";
import  userEvent  from '@testing-library/user-event'
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders",async () => {
    render(<CheckoutForm/>)
});

test("form shows success message on submit with form details", () => {
    //Arrange
    render(<CheckoutForm/>);

    //Act
    const firstNameInput = screen.getByTitle(/firstname/i)
    const lastNameInput = screen.getByTitle(/lastname/i)
    const addressInput = screen.getByTitle(/address/i)
        //user types into input
    userEvent.type(firstNameInput, "sebastian")
    userEvent.type(lastNameInput, "espeset")
    userEvent.type(addressInput, "test")


        //user clicks submit button
    const submitButton = screen.getByRole(/button/)
    userEvent.click(submitButton)
    
    //Assert
    const successMessage = screen.getByTestId(/successmessage/i)
    expect( successMessage ).toBeInTheDocument();

});
