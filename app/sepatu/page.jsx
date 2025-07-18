import ProductCategoryPage from "@/components/ProductCategoryPage";
import { GiRunningShoe } from "react-icons/gi";

export const metadata = {
  metadataBase: new URL('https://www.9teensupply.vercel.app/sepatu'),
  keywords: ['9teen supply sepatu', '9teen supply produk sepatu', '9teen supply produk', '9teen supply barang sepatu'],
  title: "Sepatu",
  openGraph: {
    description: 'Mulai dari sepatu casual dan sport semuanya ada disini!',
    images: [
      {
        url: 'https://www.9teensupply.vercel.app/opengraph-image.png',
        alt: 'My Website Open Graph Image',
        width: 1200,
        height: 630,
      }
    ]
  },
}

export default function page() {
  return (
    <main className="w-full max-w-[1080px] mx-auto px-8 animate-show-fade-in">
      <ProductCategoryPage
        category_title="Sepatu"
        icon={<GiRunningShoe size={36} />}
      />
    </main>
  )
}
