import 'bootstrap/dist/css/bootstrap.css'
import "./globals.css";
import BootstrapClient from '../../components/BootstrapClient';
import Navbar from '../../components/Navbar';
import { Poppins } from 'next/font/google';
import Head from 'next/head';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "Takalkar Academy, Bibwewadi - Pune",
  description: "Pune's Best Neet Jee Mht-Cet 11th - 12th boards academy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <meta name="facebook-domain-verification" content="rs6lday0apvkm6cw9k9282uthyofhh" />
      </Head>
      <body className={poppins.className}>
        <Navbar />
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
