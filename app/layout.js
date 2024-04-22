// import Document, { Html, Head, Main, NextScript } from "next/document";
// import { extractCritical } from "@emotion/server";

import ClientLayout from "./ClientLayout";

// export default class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const initialProps = await Document.getInitialProps(ctx);
//     const page = await ctx.renderPage();
//     const styles = extractCritical(page.html);
//     return { ...initialProps, ...page, ...styles };
//   }

//   render() {
//     return (
//       <Html lang="en">
//         <Head>
//           <style
//             data-emotion-css={this.props.ids.join(" ")}
//             dangerouslySetInnerHTML={{ __html: this.props.css }}
//           />
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }


export default function RootLayout({ children }) {
  return (
    <html>
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
            rel="stylesheet"
          />

          <meta
            name="description"
            content="Madhavudu International is a leading import export company based in India, offering high-quality and organic Indian produce to customers across the globe. Contact us today for a quote."
          />
          <meta
            name="keywords"
            content="indian imports, indian cashew, indian basmati, indian rice, Madhavudu International, import export, indian produce, organic, spices, grains, fruits, vegetables, worldwide"
          />
          <meta name="author" content="Madhavudu International" />
        </head>
        <body className="bg-white dark:bg-gray-800 p-0 md:p-4">
            <ClientLayout>
                {children}
            </ClientLayout>
        </body>
      </html>
  );
}
