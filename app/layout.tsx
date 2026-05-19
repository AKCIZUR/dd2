import './globals.css';
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body>{children}
        <Script
          defer
          data-domain="akcizur.github.io"
          src="https://plausible.io/js/script.js"
        />
      </body>
    </html>
  );
}
