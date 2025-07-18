import ProductCategoryPage from "@/components/ProductCategoryPage";
import { GiFullMotorcycleHelmet } from "react-icons/gi";

export const metadata = {
  metadataBase: new URL('https://www.9teensupply.vercel.app/helm'),
  keywords: ['9teen supply helm', '9teen supply produk helm', '9teen supply produk', '9teen supply barang'],
  title: "Helm",
  openGraph: {
    description: 'Keamanan kepala kamu menjadi nomor satu pada saat riding! Mulai explore mencari helm sekarang!',
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
        category_title="Helm"
        icon={<GiFullMotorcycleHelmet size={36} />}
      />
    </main>
  )
}
