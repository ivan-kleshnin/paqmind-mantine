import {createGetInitialProps} from "@mantine/next"
import Document, {Head, Html, Main, NextScript} from "next/document"

const getInitialProps = createGetInitialProps()

export default class _Document extends Document {
  static getInitialProps = getInitialProps

  render() {
    return <>
      <Html lang="en">
        <Head/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400..800&display=swap"
          rel="stylesheet"
        />
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    </>
  }
}
