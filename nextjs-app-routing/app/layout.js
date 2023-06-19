//Static metadata
export const metadata = {
  title: {
    template: '%s | Nextjs',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'cyan' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}