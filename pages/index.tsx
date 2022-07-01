import {
  AppShell, Box, Button, Burger, Code, Container, Divider,
  MediaQuery, Navbar, Footer, Group, Header,
  Stack, Text, Title, TypographyStylesProvider,
  useMantineTheme,
} from "@mantine/core"
import Head from "next/head"
import Image from "next/image"
import * as React from "react"

export default function HomePage() {
  const theme = useMantineTheme()
  const [opened, toggle] = React.useReducer(x => !x, false)

  return <>
    <Head>
      <title>Paqmind!</title>
    </Head>
    <AppShell
      header={<TopMenu opened={opened} toggle={toggle}/>}
      navbar={
        <Navbar
          mt="5rem"
          sx={{
            display: opened ? undefined : "none",
            [theme.fn.largerThan("sm")]: {
              display: "none",
            },
            minHeight: "calc(100vh - 5rem)",
          }}
        >
          <Container size="lg" sx={{width: "100%"}}>
            <Stack mt="1rem">
              <span>Home</span>
              <Divider variant="dashed"/>
              <span>Features</span>
              <Divider variant="dashed"/>
              <span>Pricing</span>
            </Stack>
          </Container>
        </Navbar>
      }
      footer={<AppFooter/>}
      sx={{
        main: {
          display: opened ? "none" : undefined,
          [theme.fn.largerThan("sm")]: {
            display: "block",
          },
          background: theme.colors.gray[0],
          minHeight: "calc(100vh - 5rem)",
          padding: 0,
          marginTop: "1rem",
        },
      }}
    >
      <Container size="lg" mt="5rem">
        <h1>First</h1>
        <p>First</p>
        <Code block>{`
console.log(Hi!)
console.log(Hi!)
console.log(Hi!)
        `}</Code>

        <TypographyStylesProvider mx="-1rem" px="1rem" sx={{backgroundColor: "white"}}>
          <div dangerouslySetInnerHTML={{__html: `
            <h1>H1 header</h1>
            <p>Text after H1</p>

            <h2>h2 header</h2>
            <p>First paragraph of the first section</p>
            <p>Second paragraph of the same section</p>

            <h2>h2 header</h2>
            <p>First paragraph of the second section</p>
            <p>Second paragraph of the same section</p>
            
            <h3>h3 header</h3>
            <p>Subsection</p>

            <pre>
console.log("Hi!")
console.log("Hi!")
console.log("Hi!")
            </pre>

            <p>test</p>
          `}}/>
        </TypographyStylesProvider>

        <h1>Test</h1>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <Button>Mantine!</Button>
      </Container>
    </AppShell>
  </>
}

// TopMenu
type TopMenuProps = {
  opened: boolean
  toggle: () => void
}

function TopMenu({opened, toggle}: TopMenuProps): JSX.Element {
  return <>
    <Header fixed height="5rem">
      <Container size="lg" sx={{height: "100%"}}>
        <Group position="apart" sx={{height: "100%"}}>
          <Group spacing={0} position="left" sx={{height: "100%"}}>
            <Title mr="0.5rem" order={2}>Q</Title>
            <Title mr="3rem" order={4}>paqmind</Title>
            <MediaQuery smallerThan="sm" styles={{display: "none"}}>
              <Group spacing="lg">
                <span>First</span>
                <span>Blog</span>
                <span>Links</span>
                <span>Other</span>
              </Group>
            </MediaQuery>
          </Group>
          <Group sx={{height: "100%"}}>
            <span>Sign In</span>
            <span>/</span>
            <span>Sign Up</span>
            <MediaQuery largerThan="sm" styles={{display: "none"}}>
              <BurgerMenu opened={opened} onClick={toggle}/>
            </MediaQuery>
          </Group>
        </Group>
      </Container>
    </Header>
  </>
}

// BurgerMenu
type BurgerMenuProps = {
  className?: string
  opened: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

function BurgerMenu({className, opened, onClick}: BurgerMenuProps): JSX.Element {
  return <Burger
    className={className}
    opened={opened}
    onClick={onClick}
    size="sm"
    ml="sm"
    mr={-8}
    p="0"
  />
}

// AppFooter
function AppFooter() {
  return <>
    <Footer height="10rem">
      <Container size="lg">
        <Box mt="1rem">
          (c) Paqmind Team, 2022
        </Box>
      </Container>
    </Footer>
  </>
}

// https://github.com/mantinedev/mantine/discussions/680
