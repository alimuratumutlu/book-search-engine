import { createStyles, Card, Image, Text, Group } from "@mantine/core";

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

interface ArticleCardVerticalProps {
	image: string;
	title: string;
	author: string;
}

const NO_IMAGE = "https://via.placeholder.com/140x140";

export function ArticleCardVertical({
	image,
	title,
	author,
}: ArticleCardVerticalProps) {
	const { classes } = useStyles();
	return (
		<Card withBorder radius="md" p={0} className={classes.card} mb="md">
			<Group noWrap spacing={0}>
				<Image src={image ? image : NO_IMAGE} height={140} width={140} />
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
		</Card>
	);
}
