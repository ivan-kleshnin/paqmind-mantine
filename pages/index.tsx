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
      styles={{
        main: {
          display: opened ? "none" : undefined,
          [theme.fn.largerThan("sm")]: {
            display: "block",
          },
          background: theme.colors.gray[0],
          minHeight: "calc(100vh - 5rem)",
          padding: 0,
        },
      }}
    >
      <Background/>
      <Container size="lg">
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
        <Button mb="2rem">Mantine!</Button>
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

function Background() {
  const height = "12rem"
  return <Box mt="5rem" sx={{height}}>
    <Container size="lg">
      <h1 style={{fontSize: "60px", position: "absolute", color: "white"}}>HERO SECTION</h1>
    </Container>
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <pattern id="brick" width="200" height="200" patternUnits="userSpaceOnUse">
          <rect fill="#487346" width="200" height="200"/><g fillOpacity="1"><polygon fill="#4c8e43" points="100 57.1 64 93.1 71.5 100.6 100 72.1"/><polygon  fill="#6aac5f" points="100 57.1 100 72.1 128.6 100.6 136.1 93.1"/><polygon  fill="#4c8e43" points="100 163.2 100 178.2 170.7 107.5 170.8 92.4"/><polygon  fill="#6aac5f" points="100 163.2 29.2 92.5 29.2 107.5 100 178.2"/><path  fill="#89CC7C" d="M100 21.8L29.2 92.5l70.7 70.7l70.7-70.7L100 21.8z M100 127.9L64.6 92.5L100 57.1l35.4 35.4L100 127.9z"/><polygon  fill="#768c3a" points="0 157.1 0 172.1 28.6 200.6 36.1 193.1"/><polygon  fill="#96ac58" points="70.7 200 70.8 192.4 63.2 200"/><polygon  fill="#B6CC76" points="27.8 200 63.2 200 70.7 192.5 0 121.8 0 157.2 35.3 192.5"/><polygon  fill="#96ac58" points="200 157.1 164 193.1 171.5 200.6 200 172.1"/><polygon  fill="#768c3a" points="136.7 200 129.2 192.5 129.2 200"/><polygon  fill="#B6CC76" points="172.1 200 164.6 192.5 200 157.1 200 157.2 200 121.8 200 121.8 129.2 192.5 136.7 200"/><polygon  fill="#768c3a" points="129.2 0 129.2 7.5 200 78.2 200 63.2 136.7 0"/><polygon  fill="#B6CC76" points="200 27.8 200 27.9 172.1 0 136.7 0 200 63.2 200 63.2"/><polygon  fill="#96ac58" points="63.2 0 0 63.2 0 78.2 70.7 7.5 70.7 0"/><polygon fill="#B6CC76" points="0 63.2 63.2 0 27.8 0 0 27.8"/></g>
        </pattern>
      </defs>
      <rect width="100%" height={height} fill="url(#brick)"></rect>
    </svg>
  </Box>
}
