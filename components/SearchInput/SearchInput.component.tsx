import React from "react";
import { Input } from "@mantine/core";

import { IconBook } from "@tabler/icons-react";

interface searchInputProps {
	searchTerm: string;
	setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchInput({
	searchTerm,
	setSearchTerm,
}: searchInputProps) {
	const handleSearch = () => {
		console.log("Search for books");
		setSearchTerm(searchTerm);
	};

	return (
		<Input
			icon={<IconBook />}
			placeholder="Search for books"
			value={searchTerm}
			onChange={handleSearch}
		/>
	);
}
