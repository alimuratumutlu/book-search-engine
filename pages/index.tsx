import Head from "next/head";
import { Image, Center, Container } from "@mantine/core";
import SearchInput from "@/components/SearchInput/SearchInput.component";
import Button from "@/components/Button/Button.component";

import { ArticleCardVertical } from "@/components/Card/Card.component";

import useBookData from "@/hooks/useBookData";

export default function Home() {
	const { searchTerm, setSearchTerm, books, handleSearch } = useBookData();

	return (
		<>
			<Head>
				<title>Boogle | Online Book Search</title>
				<meta
					name="description"
					content="Built with Nextjs, TypeScript and Mantine UI"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container>
				<Center h={100} mx="auto">
					<Image
						maw={240}
						mx="auto"
						radius="md"
						src="./logo.png"
						alt="Random image"
					/>
					<SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
					<Button onClick={handleSearch}>Search</Button>
				</Center>
				{books &&
					books.map((book, index) => {
						return (
							<ArticleCardVertical
								key={index}
								image={book.cover}
								title={book.title}
								author={book.author}
							/>
						);
					})}
			</Container>
		</>
	);
}
