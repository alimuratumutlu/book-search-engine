import React from "react";
import { Button as MantineButton } from "@mantine/core";

interface buttonProps {
	onClick: () => void;
	children: React.ReactNode | string;
}

export default function Button({ onClick, children }: buttonProps) {
	return <MantineButton onClick={onClick}>{children}</MantineButton>;
}
