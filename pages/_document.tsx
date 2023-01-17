import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

          `,
          }}
        />
        <meta charSet="utf-8" prefix="og: https://ogp.me/ns#" />
        <link rel="icon" href="/media/favicons/favicon.ico" />
        <meta
          name="image"
          property="og:image"
          content="/media/ogScreenshot.png"
        />
        <meta property="og:url" content="https://davidkoser.net/" />
        <meta name="theme-color" content="#66216e" />
        <meta name="description" content="David Koser - Software Engineer" />
        <meta
          property="og:description"
          content="David Koser - Software Engineer"
        />
        <link
          rel="apple-touch-icon"
          href="/media/favicons/apple-touch-icon.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta property="og:title" content="David Koser - Software Engineer" />
        <meta name="author" content="David J. Koser" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
