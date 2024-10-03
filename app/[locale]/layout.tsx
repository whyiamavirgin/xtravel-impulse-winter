import {NextIntlClientProvider} from 'next-intl';
import { Providers } from './providers';
import { montserrat } from '../ui/fonts';
import '../globals.css'
import {getMessages} from 'next-intl/server';
import { Metadata } from 'next';
import { Footer } from '../components/footer';
import { Navbar } from '../components/tourComponents/topNav';
import { GoogleTagManager } from "@next/third-parties/google"

export const metadata: Metadata = {
    title: "Impulse - Design Your Life",
    description: "Impulse - Design Your Life",
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

      {/* GOOGLE TAG MANAGER START */}
      <GoogleTagManager gtmId='GTM-N3ZP6QC4' />
      {/* GOOGLE TAG MANAGER END */}

      <body className={montserrat.className}>

        {/* GOOGLE TAG MANAGER NOSCRIPT START */}

        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N3ZP6QC4" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
          
        {/* GOOGLE TAG MANAGER NOSCRIPT START */}
        
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