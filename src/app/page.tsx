import Image from "next/image";
import { Article, CardItem } from "@/components/ui/Article";

export default function Home() {
  return (
    <main className='flex flex-col items-center w-full gap-y-[24px] min-w-[375px]'>
      {/* <!-- banner --> */}
      <div className='relative flex flex-row justify-center w-full h-[800px] px-0 md:pl-[6.25%]'>
        <div className='bg-banner bg-cover w-full h-full rounded-bl-none md:rounded-bl-[100px]'></div>
        <div className='absolute flex flex-col w-fit h-fit items-center sm:items-start inset-x-auto top-[304px] bottom-[304px] sm:left-[14%]'>
            {/* <!-- 標題 --> */}
            <div className='leading-[48px] text-[40px] md:text-[48px] font-[900] text-white tracking-[5%]'>探索無限創意的樂園</div>
            {/* <!-- 副標題 --> */}
            <div className='leading-[36px] text-[25px] md:text-[30px] font-[500] text-white tracking-[5%] mt-[12px] sm:mt-[20px]'>和我們一起發現、分享和創造</div>
            <button className='align-center w-[96px] h-[44px] w-[104px] h-[52px] px-[20px] py-[12px] text-[16px] text-white text-nowrap mt-[28px] sm:mt-[36px] rounded-md bg-[#444FAE]'>開始創作</button>
        </div>
      </div>

      {/* <!-- 主內容 --> */}
      <div id='content' className="flex w-full h-fit justify-center py-[80px] gap-x-[24px]">
        {/* <!-- wrapper --> */}
        <div id='content-wrapper' className='relative items-center md:left-[2%] lg:left-[2.5%] xl:left-[2%] flex flex-col md:items-center lg:flex-row lg:justify-center lg:items-start gap-x-[24px] gap-y-[36px] w-full sm:w-[83%] md:w-[85%] lg:w-[88%]'>
          {/* <!-- left --> */}
          <div className='left flex flex-col grow w-full sm:max-w-[570px] md:max-w-[unset] md-1:max-w-[535px] md-2:max-w-[unset] lg:w-[unset] lg-1:max-w-[535px] lg-2:max-w-[856px] h-full gap-y-[36px]'>
            {/* <!-- 熱門文章 --> */}
            <Article id='popular-articles' title='熱門文章' className='bg-[#EEF8FA]'>
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
            </Article>

            <div id='recommended-articles' className='flex flex-col w-full h-[350px] bg-[#EBEFFA]'>
              {/* <!-- (標題, 按鈕, ...) --> */}
              <div className='flex flex-row justify-between w-full h-fit sm:h-[88px]'>
                <div className='ml-[12px] sm:ml-0 flex flex-center w-[163px] h-[52px] sm:w-[200px] sm:h-[64px] gap-x-[4px] text-white text-[24px] leading-[32px] rounded-b-[7px] sm:rounded-tl-[7px] sm:border-r-[7px] sm:border-b-[7px] sm:border-white bg-[#444FAE]'>
                  <i className="size-[24px] bg-icon-thumb-up"></i>
                  <h3>推薦文章</h3>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- right --> */}
          <aside className='right flex flex-col gap-y-[36px] w-full sm:max-w-[570px] md:max-w-[unset] md-1:max-w-[535px] md-2:max-w-[unset] lg:w-[350px]'>
            {/* <!-- 創作者列表 --> */}
            <div id='creator-list' className='relative flex flex-col w-full h-fit p-[36px] rounded-[7px] bg-white border-2 border-[#E2E8F0]'>
              {/* <!-- (標題, 按鈕, ...) --> */}
              <div className="flex flex-row flex-wrap w-full h-[88px] justify-between">
                <h3 className='text-[30px] leading-[36px] font-[500]'>創作者列表</h3>
                {/* <!-- <div className='bg-curveline bg-auto bg-repeat-x bg-left-top w-[93px] h-[5px] mt-[12px]'></div> --> */}
                <a href='#' className='h-[52px] text-[#444FAE] text-base font-[700] rounded-[8px] border border-[2px] border-[#444FAE] py-[12px] px-[20px]'>
                  查看更多
                </a>
              </div>

              {/* <!-- item容器: --> */}
              <div className='items-container w-full h-full'>
                   {/* <!-- 各item: --> */}
                  <a href='#' className='item flex flex-row w-full gap-[16px] py-[16px] border-b last:border-none' title='creator'>
                    <img src='creator-image.png' className='object-cover object-left-center w-[40px] h-[40px] rounded-full' alt="creator image" />
                    <div className='flex flex-col gap-y-[4px]'>
                      <h4 className='text-[20px] font-[700] leading-[28px]'>瑪雅·弗朗西斯</h4>
                      <p className='w-full text-base font-[400] leading-[28px]'>瑪雅是一位對冒險充滿熱情的旅行者。她喜歡挑戰自己,探索世...</p>
                    </div>
                  </a>

                  <a href='#' className='flex flex-row w-full h-[92px] gap-[16px] py-[16px] border-b last:border-none' title='creator'></a>

                  <a href='#' className='flex flex-row w-full h-[92px] gap-[16px] py-[16px] border-b last:border-none' title='creator'></a>
              </div>
            </div>
            
            {/* <!-- 熱門景點 --> */}
            <div className='flex flex-col w-full h-fit p-[36px] rounded-[7px] bg-white border border-2 border-[#E2E8F0]'>
              <h3 className='text-[30px] leading-[36px] font-[500]'>熱門景點</h3>
              <div className='bg-curveline bg-auto bg-repeat-x bg-left-top w-[56px] h-[5px] mt-[12px]'></div>
              {/* <!-- 容器 --> */}
              <div className="items-container flex flex-row flex-wrap self-center  h-fit gap-x-[12px] gap-y-[16px] p-0 mt-[28px]">
                {/* <!-- 各item --> */}
                <a className='flex flex-center px-[16px] py-[4px] text-[#444FAE] text-base font-[700] min-w-[64px] h-[36px] rounded-full border-2 border-[#444FAE]' href='#'>日本</a>
                <a className='flex flex-center px-[16px] py-[4px] text-[#444FAE] text-base font-[700] min-w-[64px] h-[36px] rounded-full border-2 border-[#444FAE]' href='#'>京都</a>
                <a className='flex flex-center px-[16px] py-[4px] text-[#444FAE] text-base font-[700] min-w-[64px] h-[36px] rounded-full border-2 border-[#444FAE]' href='#'>夏威夷</a>
                <a className='flex flex-center px-[16px] py-[4px] text-[#444FAE] text-base font-[700] min-w-[64px] h-[36px] rounded-full border-2 border-[#444FAE]' href='#'>泰國</a>
                <a className='flex flex-center px-[16px] py-[4px] text-[#444FAE] text-base font-[700] min-w-[64px] h-[36px] rounded-full border-2 border-[#444FAE]' href='#'>長灘島</a>
                <a className='flex flex-center px-[16px] py-[4px] text-[#444FAE] text-base font-[700] min-w-[64px] h-[36px] rounded-full border-2 border-[#444FAE]' href='#'>拉斯維加斯</a>
                <a className='flex flex-center px-[16px] py-[4px] text-[#444FAE] text-base font-[700] min-w-[64px] h-[36px] rounded-full border-2 border-[#444FAE]' href='#'>冰島</a>
                <a className='flex flex-center px-[16px] py-[4px] text-[#444FAE] text-base font-[700] min-w-[64px] h-[36px] rounded-full border-2 border-[#444FAE]' href='#'>北海道</a>
                <a className='flex flex-center px-[16px] py-[4px] text-[#444FAE] text-base font-[700] min-w-[64px] h-[36px] rounded-full border-2 border-[#444FAE]' href='#'>台南</a>
                <a className='flex flex-center px-[16px] py-[4px] text-[#444FAE] text-base font-[700] min-w-[64px] h-[36px] rounded-full border-2 border-[#444FAE]' href='#'>布拉格</a>
                <a className='flex flex-center px-[16px] py-[4px] text-[#444FAE] text-base font-[700] min-w-[64px] h-[36px] rounded-full border-2 border-[#444FAE]' href='#'>比利時</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
