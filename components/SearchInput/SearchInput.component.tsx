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
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	return (
		<Input
			width={300}
			onChange={handleChange}
			icon={<IconBook />}
			placeholder="Search for books"
			value={searchTerm}
			style={{ width: "auto", minWidth: 400 }}
		/>
	);
}
