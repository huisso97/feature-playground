import Navbar from "@/components/common/nav-bar";
import QueryClientProvider from "@/query/query-client-provider";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <QueryClientProvider>
          <Navbar />
          <main className="container mx-auto mt-8">{children}</main>
        </QueryClientProvider>
      </body>
    </html>
  );
}
