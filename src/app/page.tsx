import Image from "next/image";
import { Banner } from "@/components/ui/Banner";
import { PopularArticles } from "@/components/ui/PopularArticles";
import { RecommendedArticles } from "@/components/ui/RecommendedArticles";
import { ArticlesCardItem } from "@/components/ui/ArticlesCardItem";
import { CreatorList, CreatorListItem } from "@/components/ui/CreatorList";
import { Attractions, AttractionsItem } from "@/components/ui/Attractions";

export default function Home() {
  return (
    <main className='flex flex-col items-center w-full gap-y-[24px] min-w-[375px]'>
      {/* <!-- banner --> */}
      <Banner />

      {/* <!-- 主內容 --> */}
      <div id='content' className="flex w-full h-fit justify-center py-[80px] gap-x-[24px]">
        {/* <!-- wrapper --> */}
        <div id='content-wrapper' className='relative items-center md:left-[2%] lg:left-[2.5%] xl:left-[2%] flex flex-col md:items-center lg:flex-row lg:justify-center lg:items-start gap-x-[24px] gap-y-[36px] w-full sm:w-[83%] md:w-[85%] lg:w-[88%]'>
          <div id='left' className='flex flex-col gap-y-[36px] grow w-full sm:max-w-[570px] md:max-w-[unset] md-1:max-w-[535px] md-2:max-w-[unset] lg:w-[unset] lg-1:max-w-[535px] lg-2:max-w-[856px] h-full'>
            <PopularArticles />
            <RecommendedArticles />
          </div>
          <aside id='right' className='flex flex-col gap-y-[36px] px-[12px] sm:px-[unset] w-full sm:max-w-[570px] md:max-w-[unset] md-1:max-w-[535px] md-2:max-w-[unset] lg:w-[350px]'>
            <CreatorList />
            <Attractions />
          </aside>
        </div>
      </div>
    </main>
  );
}
