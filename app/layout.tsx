import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Chembur Real Estate | Buy, Sell, Rent in Mumbai',
  description: 'Find the best properties for rent, buy, and sale in Chembur, Mumbai.',
  openGraph: {
    title: 'Chembur Real Estate | Buy, Sell, Rent in Mumbai',
    description: 'Find the best properties for rent, buy, and sale in Chembur, Mumbai.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chembur Real Estate | Buy, Sell, Rent in Mumbai',
    description: 'Find the best properties for rent, buy, and sale in Chembur, Mumbai.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
