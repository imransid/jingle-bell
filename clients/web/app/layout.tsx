import Footer from "@/components/layout/Footer";
import "./globals.css";
import Header from "@/components/layout/Header";
import { CommandeContextProvider } from "@/context/CommandeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="w-full min-h-screen font-bodyFont flex flex-col
        justify-between overflow-x-hidden overflow-y-scroll scrollbar scrollbar-thumb-orangeColor/60 gap-10 container mx-auto"
      >
        <CommandeContextProvider>
          <Header />
          {children}
          <Footer />
        </CommandeContextProvider>
      </body>
    </html>
  );
}
