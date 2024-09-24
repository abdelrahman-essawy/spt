import './global.css';
import { layoutMetadata, shubakFont } from '@spt/common';
import { getLocale, getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { UIProvider } from './providers';
import { ReactNode } from 'react';
import { initInfrastructure } from '../infrastructure';

export const metadata = layoutMetadata;
export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  initInfrastructure();

  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      className={`${shubakFont.className}`}
    >
      <body className="w-screen h-screen">
        <UIProvider locale={locale}>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </UIProvider>
      </body>
    </html>
  );
}
