import ProductCategoryPage from "@/components/ProductCategoryPage";
import { BikeIcon } from "lucide-react";

export const metadata = {
  metadataBase: new URL('https://www.9teensupply.vercel.app/motor-bekas'),
  keywords: ['9teen supply motor bekas', '9teen supply produk motor bekas', '9teen supply motor bekas', '9teen supply barang motor bekas'],
  title: "Motor Bekas",
  openGraph: {
    description: 'Kamu bisa menemukan motor bekas yang kamu inginkan!!',
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
        category_title="Motor Bekas"
        icon={<BikeIcon size={36} />}
      />
    </main>
  )
}
