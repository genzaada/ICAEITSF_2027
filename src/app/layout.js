import "./globals.css";

export const metadata = {
  title: "ICAEITSF 2027 | MGM University",
  description: "3rd International Conference on Applications of Machine Intelligence and Data Analytics (ICAMIDA 2027), August 19-20, 2027. Organized by MGM University, Chhatrapati Sambhajinagar, Maharashtra, India.",
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
