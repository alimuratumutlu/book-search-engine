import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button.component";

describe("Button component", () => {
	test("renders the button with the provided text", () => {
		const { getByText } = render(<Button onClick={() => {}}>Click me!</Button>);
		const buttonElement = getByText("Click me!");
		expect(buttonElement).toBeInTheDocument();
	});

	test("handles onClick event", () => {
		const handleClick = jest.fn();
		const { getByText } = render(
			<Button onClick={handleClick}>Click me!</Button>
		);
		const buttonElement = getByText("Click me!");

		fireEvent.click(buttonElement);

		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
