import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./Card.component";

describe("Card component", () => {
	test("renders the card with the provided image, title, and author", () => {
		const mockProps = {
			image: "https://via.placeholder.com/150",
			title: "Test Article Title",
			author: "John Doe",
		};

		const { getByText, getByAltText } = render(<Card {...mockProps} />);
		const titleElement = getByText(mockProps.title);
		const authorElement = getByText(mockProps.author);
		const imageElement = getByAltText(mockProps.title);

		expect(titleElement).toBeInTheDocument();
		expect(authorElement).toBeInTheDocument();
		expect(imageElement).toBeInTheDocument();
		expect(imageElement).toHaveAttribute("src", mockProps.image);
	});
});
