import { Inter } from 'next/font/google';
import './globals.css';
import { MyContextProvider } from '../context/MyContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <MyContextProvider>
          {children}
          <ToastContainer autoClose={2000} />
        </MyContextProvider>
      </body>
    </html>
  );
}
