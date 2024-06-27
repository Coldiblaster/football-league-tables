import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import { GlobalProviders } from './providers';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '800'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Tabela de Campeonatos',
  description:
    'Aqui você encontra todos campeonatos do mundo e visualiza a roda de cada um da forma que desejar',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <GlobalProviders>
          <main className="h-full w-full">{children}</main>
        </GlobalProviders>
      </body>
    </html>
  );
}
