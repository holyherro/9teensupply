import ProductCategoryPage from "@/components/ProductCategoryPage";
import { MicrochipIcon } from "lucide-react";

export const metadata = {
  metadataBase: new URL('https://www.9teensupply.vercel.app/spare-part-motor'),
  keywords: ['9teen supply spare part motor', '9teen supply produk spare part motor', '9teen supply spare part motor', '9teen supply barang spare part motor'],
  title: "Spare Part Motor",
  openGraph: {
    description: 'Kamu bisa menemukan spare part motor yang kamu inginkan!',
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
        category_title="Spare Part Motor"
        icon={<MicrochipIcon size={36} />}
      />
    </main>
  )
}
