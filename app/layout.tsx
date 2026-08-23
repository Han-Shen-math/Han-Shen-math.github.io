import type { Metadata } from 'next';
import '@fontsource/bodoni-moda/400.css';
import '@fontsource/bodoni-moda/500.css';
import '@fontsource/noto-serif-sc/400.css';
import '@fontsource/noto-serif-sc/500.css';
import '@fontsource/source-sans-3/400.css';
import '@fontsource/source-sans-3/500.css';
import '@fontsource/source-sans-3/600.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shen Han | Stochastic Analysis & Modern Probability',
  description:
    'Personal academic website of Shen Han — stochastic analysis, modern probability, and long-term explorations in brain-inspired efficient intelligence.',
  icons: {
    icon: '/assets/shen-han-avatar-v2.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
