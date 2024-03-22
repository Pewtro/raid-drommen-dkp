import type { AppType } from 'next/app';
import { Inter } from 'next/font/google';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from '~/components/providers/theme-provider';
import { cn } from '~/lib/utils';
import { api } from '~/utils/api';
import '~/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const MyApp: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProperties } }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <SessionProvider session={session}>
        <main className={cn('min-h-screen bg-background font-sans antialiased', inter.variable)}>
          <Component {...pageProperties} />
        </main>
      </SessionProvider>
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
