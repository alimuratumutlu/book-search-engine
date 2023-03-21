import React from "react";
import {
	createStyles,
	Card as MantineCard,
	Image,
	Text,
	Group,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor:
			theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
	},

	title: {
		fontWeight: 700,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		lineHeight: 1.2,
	},

	body: {
		padding: theme.spacing.md,
	},
}));

interface cardProps {
	image: string;
	title: string;
	author: string;
}

export default function Card({ image, title, author }: cardProps) {
	const { classes } = useStyles();
	return (
		<MantineCard withBorder radius="md" p={0} className={classes.card} mb="md">
			<Group noWrap spacing={0}>
				<Image src={image} height={140} width={140} alt={title} />
				<div className={classes.body}>
					<Text className={classes.title} mt="xs" mb="md">
						{title}
					</Text>
					<Group noWrap spacing="xs">
						<Group spacing="xs" noWrap>
							<Text size="xs">{author}</Text>
						</Group>
						<Text size="xs" color="dimmed">
							•
						</Text>
					</Group>
				</div>
			</Group>
		</MantineCard>
	);
}
