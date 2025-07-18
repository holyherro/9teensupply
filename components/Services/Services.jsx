import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Each from "@/utils/Each";
import { services } from "@/constant";
import ServiceItem from "./ServiceItem";
import { FaInstagram } from "react-icons/fa";

export default function Services() {
  return (
    <section id="about-us" className="lg:flex items-center justify-between mt-20 py-16">
      <div className="lg:w-[45%] animate-show-from-left">
        <div className="font-semibold text-[1.5rem] lg:text-[1.5rem] mb-14">9Teen Supply hadir untuk memberikan solusi bagi teman-teman semua yang sedang membutuhkan barang-barang yang dibutuhkan, tentunya dengan standard operasional prosedure yang baik dari kami!</div>

        <Button className={cn('text-white font-bold lg:h-[3rem] lg:w-[10rem] lg:text-[1.1rem]')} asChild>
          <a href="https://www.instagram.com/9teensupply/" target="_blank" className="">
            <FaInstagram />
            <span>Follow Kami</span>
          </a>
        </Button>
      </div>

      <div className="space-y-4 mt-10 lg:w-[45%] xl:w-[50%] animate-show-from-right">
        <Each of={services} render={(props) => 
          <ServiceItem {...props} />
        } />
      </div>
    </section>
  )
}
