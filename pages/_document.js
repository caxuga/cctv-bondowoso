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

        <link rel="icon" href="/favicon.ico" />

        {/* Histats Script */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var _Hasync = _Hasync || [];
              _Hasync.push(['Histats.start', '1,1509227,4,4006,112,61,00011101']);
              _Hasync.push(['Histats.fasi', '1']);
              _Hasync.push(['Histats.track_hits', '']);
              (function() {
                var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
                hs.src = ('//s10.histats.com/js15_as.js');
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
              })();
            `,
          }}
        />
      </Head>

      <body className="antialiased bg-black text-white">
        <Main />
        <NextScript />

        {/* Tawk.to Live Chat Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
              (function(){
                var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = 'https://embed.tawk.to/68561b05c44c79190f9881b6/1iu85j53s';
                s1.charset = 'UTF-8';
                s1.setAttribute('crossorigin', '*');
                s0.parentNode.insertBefore(s1, s0);
              })();
            `,
          }}
        />

        {/* FOOTER */}
        <footer className="mt-10 text-center text-sm text-gray-400 py-6 border-t border-gray-700">
          <div className="text-center text-sm text-gray-400">
            by{" "}
            <span className="text-white font-semibold">
              <a
                href="https://www.instagram.com/caksoega/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                @caksoega
              </a>
            </span>
            <p>
              sumber:{" "}
              <a
                href="https://dishub.bondowosokab.go.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                www.dishub.bondowosokab.go.id
              </a>
            </p>
          </div>

          {/* Histats Counter Visual */}
          <div id="histats_counter" className="flex justify-center items-center mt-4"></div>
        </footer>

        {/* Noscript fallback */}
        <noscript>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <img src="//sstatic1.histats.com/0.gif?1509227&101" alt="counter" border="0" />
          </a>
        </noscript>
      </body>
    </Html>
  );
}
