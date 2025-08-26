import type { Metadata } from 'next';
import { Provider } from '../providers/chakra.provider';

export const metadata: Metadata = {
  title: 'Tarefai',
  description: 'Gerenciador de tarefas',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
