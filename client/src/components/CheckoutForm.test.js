import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  const header = screen.queryByText(/checkout form/i);
  // expect(header).toBeInTheDocument();
  // expect(header).toBeTruthy();
});

test("form shows success message on submit with form details", async () => {
  //Arrange: setup react component
  render(<ContactForm />);

  //Act: Submit our form
  //  1. Query for our form elements
  //  2. Type into our form elements
  //  3. Query for our form buttom
  //  4. Click our form button
  const fName = screen.getByLabelText(/First Name:/i);
  const lName = screen.getByLabelText(/Last Name:/i);
  const address = screen.getByLabelText(/Address:/i);
  const city = screen.getByLabelText(/City:/i);
  const state = screen.getByLabelText(/State:/i);
  const zip = screen.getByLabelText(/Zip:/i);

  userEvent.type(fName, "Michael");
  userEvent.type(lName, "Maton");
  userEvent.type(address, "12805 Tipperary Lane");
  userEvent.type(city, "Plainfield");
  userEvent.type(state, "IL");
  userEvent.type(zip, "60585");

  const button = screen.getByRole("button");
  userEvent.click(button);
  //   console.log(button);

  //Assert: Test to see if submit worked
  //  1. Find our submitted inputs
  const success = await screen.findByText(/You have ordered some plants!/i);
  expect(success).toBeInTheDocument();
});
