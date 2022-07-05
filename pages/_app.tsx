import {AppProps} from "next/app"
import Head from "next/head"
import {Global, MantineProvider} from "@mantine/core"
import "@fontsource/open-sans/variable.css"
import "styles/reset.css"

export default function App(props : AppProps) {
  const {Component, pageProps} = props

  return <>
    <Head>
      <title>Page title</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
    </Head>

    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      defaultProps={{
        Anchor: {size: ""},
        Code: {sx: {fontSize: "14px"}},
        Prism: {
          styles: {
            code: {fontSize: "14px"},
            line: {padding: "0 8px"},
            copy: {top: "20px"},
          }
        },
        Text: {size: ""},
      }}
      theme={{
        fontFamily: "'Open Sans', sans-serif",
        headings: {
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 600,
        },
        colorScheme: "light",
        spacing: {
          xs: 8,   // 0.5rem
          sm: 12,  // 0.75rem
          md: 16,  // 1rem
          lg: 20,  // 1.25rem
          xl: 24,  // 1.5rem
          // xxl: 32, // 2rem -- extension not supported @_@
        }
      }}
    >
      <Global
        styles={() => [
          {
            // css`...put string styles here...`

            // "*, *::before, *::after": {
            //   boxSizing: "border-box",
            // },

            body: {
            //   ...theme.fn.fontStyles(),
            //   // backgroundColor:/* theme.colorScheme === "dark" ? theme.colors.dark[7] :*/ theme.white,
            //   // color: /*theme.colorScheme === "dark" ? theme.colors.dark[0] :*/ theme.black,
            //   fontFamily: "Finlandica", // 'Open SansVariable', sans-serif",
            //   lineHeight: theme.lineHeight,
            //   margin: "32px",
            },
          },
        ]}
      />
      <Component {...pageProps} />
    </MantineProvider>
  </>
}
