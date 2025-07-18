import ProductCategoryPage from "@/components/ProductCategoryPage";
import { Smartphone } from "lucide-react";

export const metadata = {
  metadataBase: new URL('https://www.9teensupply.vercel.app/handphone'),
  keywords: ['9teen supply handphone', '9teen supply produk handphone', '9teen supply produk', '9teen supply barang handphone'],
  title: "Handphone",
  openGraph: {
    description: 'Handphone adalah kebutuhan yang sangat penting! Mulai explore mencari handphone sekarang!',
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

export default async function page() {
  return (
    <main className="w-full max-w-[1080px] mx-auto px-8 animate-show-fade-in">
      <ProductCategoryPage
        category_title="Handphone"
        icon={<Smartphone size={36} />}
      />
    </main>
  )
}
