import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        {/* Meta Preview untuk Sosial Media */}
        <meta property="og:title" content="Monitor CCTV Bondowoso" />
        <meta property="og:description" content="Pantauan CCTV di berbagai titik wilayah Kabupaten Bondowoso secara langsung." />
        <meta property="og:image" content="https://cctv-bondowoso.vercel.app/thumbnail.jpg" />
        <meta property="og:url" content="https://cctv-bondowoso.vercel.app" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Monitor CCTV Bondowoso" />
        <meta name="twitter:description" content="Pantauan CCTV di berbagai titik wilayah Kabupaten Bondowoso secara langsung." />
        <meta name="twitter:image" content="https://cctv-bondowoso.vercel.app/thumbnail.jpg" />

        {/* (Opsional) Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased bg-black text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}