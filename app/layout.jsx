import Header from "@/components/Header/Header";
import "./globals.css";
import Theme from "@/theme-provider";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['300', '400', '700', '800'],
  style: ['italic', 'normal']
});

export const metadata = {
  metadataBase: new URL('https://9teensupply.vercel.app'),
  keywords: ['9teen supply', 'nineteen supply'],
  title: {
    default: '9Teen Supply',
    template: "9Teen Supply | %s",
  },
  verification: {
    google: "87KEDp3og1zcknqAt8Bl4IekMKAJfDQSa5HWEkON7Q4"
  },
  openGraph: {
    description: '9Teen Supply hadir untuk memberikan solusi bagi teman-teman semua yang sedang membutuhkan barang-barang yang dibutuhkan, tentunya dengan standard operasional prosedure yang baik dari kami!',
    images: [
      {
        url: 'https://9teensupply.vercel.app/opengraph-image.png',
        alt: 'My Website Open Graph Image',
        width: 1200,
        height: 630,
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "9Teen Supply Website",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${poppins.className} antialiased`}>
        <Theme>
          <Header />
          {children}
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
