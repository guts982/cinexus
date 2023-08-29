
import TrendingSection from "@/components/TrendingSection";
import HeroBanner from "@/components/layout/HeroBanner";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <section className=" h-full w-full p-4 sm:p-6 xl:p-10 2xl:p-14  flex flex-col justify-center items-center gap-5 ">



        <Separator />

        <TrendingSection />


      </section>
    </>
  );
}
