import "./globals.css";

export const metadata = {
  title: "Oliver Barnum",
  description: "Oliver Barnum's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
