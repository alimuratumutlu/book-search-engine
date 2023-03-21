import Head from "next/head";
import { Center } from "@mantine/core";
import SearchInput from "@/components/SearchInput/SearchInput.component";
import Button from "@/components/Button/Button.component";

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
			<Center h={100} mx="auto">
				<SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
				<Button onClick={handleSearch}>Search</Button>
			</Center>
		</>
	);
}
