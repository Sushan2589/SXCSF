import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

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
       
      <body>{children}
        <Analytics />
      </body>
    </html>
  );
}
