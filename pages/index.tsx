import Head from "next/head";
import { Group, Image, Center, Container, Loader, Stack } from "@mantine/core";
import SearchInput from "@components/SearchInput/SearchInput.component";
import Button from "@components/Button/Button.component";
import Card from "@components/Card/Card.component";

import useBookData from "@/hooks/useBookData";

export default function Home() {
	const { isLoading, searchTerm, setSearchTerm, books, handleSearch } =
		useBookData();

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
			<Container mt="xl" size="xl">
				<div>
					<Image maw={240} mx="auto" radius="md" src="./logo.png" alt="Logo" />
				</div>
				<Center mb="xl">
					<Group>
						<SearchInput
							searchTerm={searchTerm}
							setSearchTerm={setSearchTerm}
						/>
						<Button onClick={handleSearch}>Search</Button>
					</Group>
				</Center>
				<Center>{isLoading && <Loader />}</Center>
				{!isLoading &&
					books &&
					books.map((book, index) => {
						return (
							<Card
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
