import ProductDetail from "@/components/Product/ProductDetail";
import ProductNotFound from "@/components/ProductNotFound";
import { getProduct } from "@/services/sanity-api";

export async function generateMetadata({ params: { slug } }) {
  const { title, thumbnail } = await getProduct(slug);
  return {
    title: `${title}`,
    openGraph: {
      description: `Produk 9Teen Supply ${title}`,
      images: [
        {
          url: thumbnail,
          alt: `${title} image`,
        }
      ]
    },
  }
}

export default async function page({ params: { slug } }) {
  const product = await getProduct(slug);
  return (
    <main className="w-full max-w-[1080px] mx-auto px-8 animate-show-fade-in">
      {Object.keys(product).length > 0 ? (
        <ProductDetail product={product} slug={slug} />
      ) : (
        <ProductNotFound />
      )}
    </main>
  )
}
