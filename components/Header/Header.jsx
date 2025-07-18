import Link from "next/link";
import Logo from "./Logo";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ['400'],
  style: ['normal']
});

export default function Header() {
  return (
    <header className="px-4 py-4 sticky top-0 left-0 right-0 z-[999] bg-white backdrop-blur-[10px] bg-opacity-90">
      <div className="max-w-[1080px] mx-auto flex items-center md:gap-20 gap-8 justify-center">
        <Link href="#about-us" className={`${greatVibes.className} text-[1.5rem] animate-show-from-left`}>Tentang Kami</Link>
        <Logo />
        <Link href="#recomendation" className={`${greatVibes.className} text-[1.5rem] animate-show-from-right`}>For You</Link>
      </div>
    </header>
  );
}
