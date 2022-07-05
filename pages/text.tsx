import {Box, Group, Divider, TypographyStylesProvider} from "@mantine/core"
import * as React from "react"
import {Typography} from "components/Typography/Typography"

export default function TextPage() {
  return <Box m={32}>
    <Group spacing={32}>
      <TypographyStylesProvider>
        <h1>H1 test <a href="#">Anchor</a> H1 continue</h1>
        <h2>H2 test</h2>
        <p>p test</p>
        <p>p test</p>
        <h2>H2 test</h2>
        <p>p test</p>
        <p>p test <code>inline code</code> continues</p>
        <pre>
          pre
        </pre>
        <pre><code>
          pre &gt; code
        </code></pre>
      </TypographyStylesProvider>

      <Typography>
        <h1>H1 test <a href="#">Anchor</a> H1 continue</h1>
        <h2>H2 test</h2>
        <p>p test</p>
        <p>p test</p>
        <h2>H2 test</h2>
        <p>p test</p>
        <p>p test <code>inline code</code> continues</p>
        <pre>
          pre
        </pre>
        <pre><code>
          pre &gt; code
        </code></pre>
      </Typography>
    </Group>

    <Divider/>

    <Group spacing={32}>
      <TypographyStylesProvider>
        <div dangerouslySetInnerHTML={{__html: `
          <h1>H1 test <a href="#">Anchor</a> H1 continue</h1>
          <h2>H2 test</h2>
          <p>p test</p>
          <p>p test</p>
          <h2>H2 test</h2>
          <p>p test</p>
          <p>p test <code>inline code</code> continues</p>
          <pre>pre</pre>
          <pre><code>pre &gt; code</code></pre>
        `}}/>
      </TypographyStylesProvider>

      <Typography>
        <div dangerouslySetInnerHTML={{__html: `
          <h1>H1 test <a href="#">Anchor</a> H1 continue</h1>
          <h2>H2 test</h2>
          <p>p test</p>
          <p>p test</p>
          <h2>H2 test</h2>
          <p>p test</p>
          <p>p test <code>inline code</code> continues</p>
          <pre>pre</pre>
          <pre><code>pre &gt; code</code></pre>
        `}}/>
      </Typography>
    </Group>
  </Box>
}

