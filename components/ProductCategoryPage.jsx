import { Suspense } from "react";
import ArrowBack from "./ArrowBack";
import { Card } from "./ui/card";
import LoadingSpinner from "./LoadingSpinner";
import ProductItem from "./ProductItem";
import ProductNotAvailable from "./ProductNotAvailable";
import { getProducts } from "@/services/sanity-api";

export default async function ProductCategoryPage({ category_title, icon }) {
  const products = await getProducts(category_title);
  return (
    <Card className="mt-4 overflow-hidden mb-4">
      <h1 className="w-[30rem] text-[.9rem] sm:text-[1.4rem] h-14 px-4 bg-slate-800 flex items-center text-white rounded-tr-full rounded-br-full">
        <ArrowBack />

        <span className="ml-4">Kategori : {" "}</span>
        <span className="flex items-center gap-2 ml-4">
          {icon}
          <span>{category_title}</span>
        </span>
      </h1>

      <div className="p-4 grid lg:grid-cols-3 gap-2 md:grid-cols-2">
        <Suspense fallback={<LoadingSpinner />}>
          {products.length > 0 && (
            products.map((product) => <ProductItem className='h-[25rem]' key={product.slug} {...product} />)
          )}
        </Suspense>
      </div>

      {products.length === 0 && <ProductNotAvailable category_title={category_title} />}
    </Card>
  )
}
