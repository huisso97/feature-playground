import { SiteHeader } from '@/components/common/site-header';
import './globals.css';
import { ThemeProvider } from '@/components/common/theme-provider';
import { cn } from '@/lib/utils';
import QueryClientProvider from '@/query/query-client-provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className={cn('min-h-screen bg-background font-sans antialiased')}>
        <QueryClientProvider>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <div className='relative flex min-h-screen flex-col'>
              <SiteHeader />
              <div className='flex-1'>{children}</div>
            </div>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
