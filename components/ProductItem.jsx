import Image from "next/image";
import { MapPin } from "lucide-react";
import Link from "next/link";

export default function ProductItem({ location, thumbnail, title, price, slug, className }) {
  return (
    <Link href={`/product/${slug}`} className={`rounded-xl border bg-card text-card-foreground shadow block overflow-hidden ${className}`}>
      <Image
        src={thumbnail}
        width={1080}
        height={1920}
        alt="image-product"
        className="w-full h-[70%] object-cover"
      />

      <div className="p-4">
        <h1 className="font-bold text-[.9rem] sm:text-[1rem]">{title}</h1>

        <p className="flex gap-2 items-center text-[.7rem] sm:text-[.8rem] text-slate-600">
          <MapPin size={12} />
          {location}
        </p>

        <p className="font-bold text-slate-800 sm:text-[1.5rem]">Rp. {price}</p>
      </div>
    </Link>
  )
}
