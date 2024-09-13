import {NextIntlClientProvider} from 'next-intl';
import { Providers } from './providers';
import { montserrat } from '../ui/fonts';
import '../globals.css'
import {getMessages} from 'next-intl/server';
import { Metadata } from 'next';
import { Footer } from '../components/footer';
import { Navbar } from '../components/tourComponents/topNav';

export const metadata: Metadata = {
    title: "Travel",
    description: "Travel with us",
  };
 
export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body className={montserrat.className}>
        <NextIntlClientProvider messages={messages}>
            <Providers>
                {/* <TopNav /> */}
                <Navbar />
                {children}
                <Footer />
            </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}