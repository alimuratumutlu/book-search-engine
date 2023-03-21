import { useState } from "react";
import axios from "axios";

interface Book {
	title: string;
	author: string;
	cover: string;
	publish_year: string | number;
}

const useBookData = () => {
	const [books, setBooks] = useState<Book[]>([]);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const fetchBooks = async (searchTerm: string) => {
		try {
			setIsLoading(true);
			const response = await axios.get(
				`https://admin.muum.dev/book_search.php?searchTerm=${searchTerm}`
			);
			const books = response.data;
			console.log("books", books);
			setIsLoading(false);
			return books;
		} catch (error) {
			console.error("Error fetching books:", error);
			return [];
		}
	};

	const handleSearch = async () => {
		const books = await fetchBooks(searchTerm);
		setBooks(books);
	};

	return {
		books,
		isLoading,
		searchTerm,
		setSearchTerm,
		handleSearch,
	};
};

export default useBookData;
