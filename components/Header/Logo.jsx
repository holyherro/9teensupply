import Image from "next/image";
import Link from "next/link";
import ImageLogo from "@/app/icon.png";

export default function Logo() {
  return (
    <Link href="/" className="animate-show-fade-in">
      <Image
        src={ImageLogo}
        alt="nineteen supply logo"
        className="w-28 h-14 object-cover"
      />
    </Link>
  );
}
