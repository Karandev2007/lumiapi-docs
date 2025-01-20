import './globals.css';

export const metadata = {
  title: 'LumiAPI Documentation',
  description: 'Documentation for public APIs',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <header className="bg-gray-800 p-4 text-center text-white flex justify-center items-center">
          <img 
            src="https://iili.io/2iKqTDg.png" 
            alt="LumiAPI Logo" 
            className="h-8 w-auto me-3" 
          />
          <h1 className="text-3xl font-bold">LumiAPI Documentation</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}