import React from "react";
import { Input } from "@mantine/core";

import { IconBook } from "@tabler/icons-react";

export default function SearchInput() {
	return <Input icon={<IconBook />} placeholder="Search for books" />;
}
