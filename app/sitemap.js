import { getProductsRecomendation } from "@/services/sanity-api";

export default async function sitemap() {
  const fetchedProducts = await getProductsRecomendation();

  const products = fetchedProducts?.map((product) => {
    return {
      url: `https://www.9teensupply.vercel.app/product/${product.slug}`,
      lastModified: product.publishedAt,
    }
  });

  return [
    {
      url: 'https://www.9teensupply.vercel.app',
      lastModified: new Date()
    },
    ...products
  ]
}