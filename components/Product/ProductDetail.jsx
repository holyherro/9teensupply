'use client'

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { Card } from "../ui/card";
import { MapPin } from "lucide-react";
import { Button } from "../ui/button";
import ArrowBack from "../ArrowBack";
import { PortableText } from "next-sanity";

export default function ProductDetail({ product }) {
  const { title, location, price, description, latitude, longitude, images } = product;

  const handleBookingProduct = () => {
    const message = `Halo saya tertarik dengan produk ${title}`.split(" ").join("%20");
    window.open(`https://wa.me/6285892748031?text=${message}`, '_blank')
  }
  return (
    <section className="mt-10">
      <div className="flex items-center gap-4">
        <ArrowBack />
        <span className="text-[1.2rem]">Kembali</span>
      </div>
      <Carousel
        className="mt-4"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="flex items-center justify-center bg-black">
              <Image
                src={image.url}
                alt="image-jumbotron"
                width={480}
                height={1920}
                className="h-[400px] object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="lg:ml-60 md:ml-20 ml-6 h-10 w-10" />
        <CarouselNext className="lg:mr-60 md:mr-20 mr-6 h-10 w-10" />
      </Carousel>

      <div className="md:flex md:gap-2 mt-4 max-md:space-y-2">
        <Card className="p-4 md:w-[75%]">
          <h1 className="font-bold text-slate-800 sm:text-[2rem] text-[1.3rem]">{title}</h1>

          <p className="flex gap-2 items-center text-[.7rem] sm:text-[1rem] text-slate-600">
            <MapPin size={12} />
            {location}
          </p>
          
        </Card>

        <Card className="p-4 md:w-[25%]">
          <p className="font-bold text-slate-800 text-[1.5rem]">Rp. {price}</p>
          <Button className="w-full mt-4 text-[1rem]" onClick={handleBookingProduct}>Pesan Sekarang</Button>
        </Card>
      </div>

      <Card className="mt-4 overflow-hidden mb-4">
        <h1 className="w-72 text-[1.2rem] h-14 px-4 bg-slate-800 flex items-center text-white rounded-tr-full rounded-br-full">Deskripsi Produk</h1>

        <div className="px-8 py-4 text-[.8rem] sm:text-[1rem]">
          <PortableText value={description} />
        </div>
      </Card>
    
      <Card className="mt-4 overflow-hidden mb-4">
        <h1 className="w-72 text-[1.2rem] h-14 px-4 bg-slate-800 flex items-center text-white rounded-tr-full rounded-br-full">Detail Lokasi</h1>

        <div className="px-8 py-4 flex flex-wrap items-center gap-2">
          <iframe src={`https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`} width="100%" height="600px" frameborder="0" aria-hidden="false" tabindex="0" style={{ border: '0px' }}></iframe>
        </div>
      </Card>
    </section>
  )
}
