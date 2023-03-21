import { useState } from "react";
import axios from "axios";

interface Book {
	title: string;
	author: string;
	cover: string;
	publish_year: string | number;
}

const useBookData = () => {
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [books, setBooks] = useState<Book[]>([]);

	const fetchBooks = async (searchTerm: string) => {
		try {
			const response = await axios.get(
				`https://admin.muum.dev/book_search.php?searchTerm=${searchTerm}`
			);
			const books = response.data;
			console.log(books);
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
		searchTerm,
		setSearchTerm,
		books,
		handleSearch,
	};
};

export default useBookData;
