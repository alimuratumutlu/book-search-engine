import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export interface Book {
	title: string;
	author: string;
	cover: string;
	publish_year: string | number;
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Book[]>
) {
	const searchTerm = req.query.searchTerm;

	const url = `http://openlibrary.org/search.json?q=${searchTerm}`;
	const response = await axios.get(url);
	const books: Book[] = response.data.docs.slice(0, 50).map((book: any) => ({
		title: book.title,
		author: book.author_name ? book.author_name[0] : "Unknown Author",
		cover: `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`,
		publish_year: book.first_publish_year || "N/A",
	}));
	res.status(200).json(books);
}
