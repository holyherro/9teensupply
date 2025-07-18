import JumbotronCarousel from "@/components/Hero/JumbotronCarousel";
import Categories from "@/components/Kategori/Categories";
import LoadingSpinner from "@/components/LoadingSpinner";
import Recomendation from "@/components/Rekomendasi/Recomendation";
import Services from "@/components/Services/Services";
import { Suspense } from "react";

export const metadata = {
  title: 'Homepage'
}

export default async function Home() {
  return (
    <main className="w-full max-w-[1080px] mx-auto px-8">
      <JumbotronCarousel />
      <Categories />
      <Suspense fallback={<LoadingSpinner />}>
        <Recomendation />
      </Suspense>
      <Services />
    </main>
  );
}
