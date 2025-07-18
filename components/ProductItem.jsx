import Image from "next/image";
import { MapPin } from "lucide-react";
import Link from "next/link";

export default function ProductItem({ location, thumbnail, title, price, slug }) {
  return (
    <Link href={`/product/${slug}`} className="w-[25rem] rounded-xl border bg-card text-card-foreground shadow block overflow-hidden">
      <Image
        src={thumbnail}
        width={1080}
        height={1920}
        alt="image-product"
        className="w-full h-[70%] object-cover"
      />

      <div className="p-4">
        <h1 className="font-bold">{title}</h1>

        <p className="flex gap-2 items-center text-[.8rem] text-slate-600">
          <MapPin size={12} />
          {location}
        </p>

        <p className="font-bold text-slate-800 text-[1.5rem]">Rp. {price}</p>
      </div>
    </Link>
  )
}
