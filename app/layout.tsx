// app/layout.tsx
import { ReactNode } from 'react';
import { AppProvider } from './contexts/context';

interface Props {
  children: ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body>
      <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;
