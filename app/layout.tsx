import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ViewTracker from "./components/ViewTracker";
import { NavigationProvider } from "./context/NavigationContext";

export const metadata: Metadata = {
  title: "Muskan Pandey | Software Development Engineer",
  description: "Software Engineer | Next.js | React.js | MUI | Golang | Building scalable web apps and developer tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors">
        <NavigationProvider>
          <ViewTracker />
          <Header />
          <Sidebar />
          <main className="flex-1 mt-16 md:ml-[220px]">
            {children}
          </main>
          <Footer />
        </NavigationProvider>
      </body>
    </html>
  );
}
