"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import JumbotronImage1 from '@/public/images/jumbotron-image-1.png';
import JumbotronImage2 from '@/public/images/jumbotron-image-2.png';
import Autoplay from "embla-carousel-autoplay";

export default function JumbotronCarousel() {
  return (
    <Carousel
      className="mt-4 animate-show-from-top"
      plugins={[
        Autoplay({
          delay: 8000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem key={1}>
          <Image
            src={JumbotronImage1}
            alt="image-jumbotron"
            width={1080}
            className="h-[400px] rounded-md object-contain"
          />
        </CarouselItem>
        <CarouselItem key={2}>
          <Image
            src={JumbotronImage2}
            alt="image-jumbotron"
            width={1080}
            className="h-[400px] rounded-md object-cover"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="ml-6 h-10 w-10" />
      <CarouselNext className="mr-6 h-10 w-10" />
    </Carousel>
  )
}
