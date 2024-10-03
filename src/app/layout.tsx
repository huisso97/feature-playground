import { SiteHeader } from '@/components/common/site-header';
import { ThemeProvider } from '@/components/common/theme-provider';
import QueryClientProvider from '@/query/query-client-provider';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className='min-h-screen bg-background'>
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
