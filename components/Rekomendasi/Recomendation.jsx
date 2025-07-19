import { getProducts } from "@/services/sanity-api";
import ProductItem from "../ProductItem";
import { Card } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Each from "@/utils/Each";

export default async function Recomendation() {
  const products = await getProducts("Rekomendasi");
  return (
    <Card id="recomendation" className="mt-4 overflow-hidden mb-4 animate-show-fade-in">
      <h1 className="w-72 text-[1.2rem] h-14 px-4 bg-slate-800 flex items-center text-white rounded-tr-full rounded-br-full">Rekomendasi untukmu</h1>

      <div className="px-8 py-4 flex flex-wrap items-center gap-2">
        <Carousel
          className="mt-4 w-full"
          opts={{ 
            align: 'start'
          }}
        >
          <CarouselContent className="">
            <Each of={products} render={(props) => 
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <ProductItem className="h-[25rem]" {...props} />
              </CarouselItem>
            } />
          </CarouselContent>
          {products.length === 0 && <p className="text-center h-[50vh] flex items-center justify-center">Saat ini barang tidak tersedia, coba lain kali ya 😊</p>}
          <CarouselPrevious className="ml-6 h-10 w-10" />
          <CarouselNext className="mr-6 h-10 w-10" />
        </Carousel>
      </div>
    </Card>
  )
}
