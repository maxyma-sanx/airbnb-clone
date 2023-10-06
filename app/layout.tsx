import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import './globals.css';

import { Navbar, RegisterModal } from './components';
import { ToasterProvider } from './providers';

export const metadata: Metadata = {
  title: 'Airbnb',
  description:
    'Airbnb: Vacation Rentals, Cabins, Beach Houses, Unique Homes & Experiences',
};

const font = Nunito({ subsets: ['latin'] });

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
