import React from "react";
import { Button as MantineButton } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

interface buttonProps {
	onClick: () => void;
	children: React.ReactNode | string;
}

export default function Button({ onClick, children }: buttonProps) {
	return (
		<MantineButton
			onClick={onClick}
			variant="gradient"
			gradient={{ from: "indigo", to: "cyan" }}
			rightIcon={<IconSearch size="1rem" />}
		>
			{children}
		</MantineButton>
	);
}
