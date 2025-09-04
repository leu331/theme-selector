import type { Metadata } from 'next';
import { ChakrProvider } from '../providers/chakra.provider';

export const metadata: Metadata = {
  title: 'DropD',
  description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ChakrProvider>
          {children}
        </ChakrProvider>
      </body>
    </html>
  );
}
