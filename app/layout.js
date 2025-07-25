import "./globals.css";

export const metadata = {
  title: "Science Fest",
  description:
    "Dive into the world of innovation and student-powered creativity ",
     icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       
      <body>{children}</body>
    </html>
  );
}
