import {
  Avatar, Box, Stack, Paper, Text, Title, TypographyStylesProvider,
  /* useMantineTheme*/
} from "@mantine/core"
import React from "react"
import {Link} from "components"

type CommentCardProps = {
  postedAt: string
  body: string
  author: {
    name: string
    image: string
  }
}

export function CommentCard({postedAt, body, author}: CommentCardProps) {
  // const theme = useMantineTheme()

  return <>
    <Paper
      withBorder
      sx={{
        padding: "20px 24px 20px 24px",
      }}
    >
      <Stack
        sx={{
          "@media (min-width: 640px)": {
            flexDirection: "row",
          },
        }}
      >
        <Avatar size={64} src={author.image} alt={author.name} radius="xl"/>
        <div>
          <Title order={3}>{author.name}</Title>
          <Text>Fullstack Developer. <Link href="#">Ivan Kleshnin</Link> was a mentor.</Text>
          <Text color="dimmed">
            Posted: {postedAt}
          </Text>
          <TypographyStylesProvider mt={8}>
            <Box
              sx={{
                "& > p": {
                  textAlign: "justify",
                  hyphens: "auto",
                },
                "& > p:last-child": {
                  marginBottom: 0,
                },
              }}
              dangerouslySetInnerHTML={{__html: body}}
            />
          </TypographyStylesProvider>
        </div>
      </Stack>
    </Paper>
  </>
}
