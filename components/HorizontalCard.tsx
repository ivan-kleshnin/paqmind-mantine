import React from "react"
import {Box, Group, Paper, Text, Title, useMantineTheme} from "@mantine/core"
import {Link} from "components"

interface HorizontalCardProps {
  postedAt: string
  title: string
  body: string
  tags?: string[]
}

export function HorizontalCard({postedAt, title, body, tags = []}: HorizontalCardProps) {
  const theme = useMantineTheme()

  return <>
    <Paper
      p="1.5rem"
      sx={{
        position: "relative",
        "&::before": {
          content: "''",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: 4,
          backgroundImage: theme.fn.linearGradient(0, theme.colors.blue[6], theme.colors.green[6]),
        },
      }}
    >
      <Title order={3}>
        {title}
      </Title>
      <Text color="dimmed">
        Posted: {postedAt}
      </Text>
      <Box
        my={8}
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
      <Group>
        {
          tags.map((tag, i) =>
            <Link key={i} href="#">
              <strong><code>#{tag}</code></strong>
            </Link>
          )
        }
      </Group>
    </Paper>
  </>
}
