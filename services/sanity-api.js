import { client } from "@/client-config";
import { groq } from "next-sanity";

export async function getProducts(category) {
  return client.fetch(
    groq`*[_type == "product" && references(*[ title == $category]._id)] | order(publishedAt desc) {
      title,
      price,
      "slug": slug.current,
      location,
      "thumbnail": thumbnail.asset->url,
    }`,
    { category }
  )
}

export async function getProductsRecomendation() {
  return client.fetch(
    groq`*[_type == "product" && references(*[ title == "Rekomendasi"]._id)] | order(publishedAt desc) {
      title,
      price,
      "slug": slug.current,
      location,
      categories,
      "thumbnail": thumbnail.asset->url,
      publishedAt
    }`
  )
}

export async function getProduct(slug) {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      title,
      price,
      slug,
      location,
      images[] {
        'url': asset->url
      },
      description,
      latitude,
      longitude,
      publishedAt,
    }`,
    { slug }
  )
}