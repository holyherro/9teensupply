import ProductDetail from "@/components/Product/ProductDetail";
import { getProduct } from "@/services/sanity-api";

export async function generateMetadata({ params: { slug } }) {
  const titleProduk = slug.split("-").join(" ");
  return {
    title: `Produk - ${titleProduk}`,
    openGraph: {
      description: `Produk 9Teen Supply ${titleProduk}`,
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
}

export default async function page({ params: { slug } }) {
  const product = await getProduct(slug);
  return (
    <main className="w-full max-w-[1080px] mx-auto px-8 animate-show-fade-in">
      <ProductDetail product={product} />
    </main>
  )
}
