import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        <body className={'h-screen w-screen font-sans'}>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
