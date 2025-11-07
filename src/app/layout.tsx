import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "eVolve",
  description: "Engineering Interview System",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0D0D0D] text-white antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
