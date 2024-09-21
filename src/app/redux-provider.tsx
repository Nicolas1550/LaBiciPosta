'use client'; 

import { Provider } from 'react-redux';
import { store } from '@/redux/store';

// Importa las fuentes localmente
import localFont from 'next/font/local';
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

function InnerLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      {/* Aplicar los estilos globales con el estado de modo oscuro */}
      <div className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </div>
    </>
  );
}

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <InnerLayout>{children}</InnerLayout>
    </Provider>
  );
}
