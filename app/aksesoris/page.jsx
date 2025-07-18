import ProductCategoryPage from '@/components/ProductCategoryPage'
import { Briefcase } from 'lucide-react'

export const metadata = {
  metadataBase: new URL('https://www.9teensupply.vercel.app/aksesoris'),
  keywords: ['9teen supply aksesoris', '9teen supply produk aksesoris', '9teen supply produk', '9teen supply barang aksesoris'],
  title: "Aksesoris",
  openGraph: {
    description: 'Mulai mencari aksesoris pilihanmu sekarang!',
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
        category_title="Aksesoris"
        icon={<Briefcase size={36} />}
      />
    </main>
  )
}
