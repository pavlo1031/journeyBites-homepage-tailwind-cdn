'use client'
import Link from 'next/link';
import { ArticlesCardItem } from './ArticlesCardItem';
import { UiPropsType } from '@/types/UiPropsType';

interface PopularArticlesProps extends UiPropsType {
    children?: any
    title?: string,
    description?: string,
    author?: string,
    date?: string
}

function PopularArticles(props : PopularArticlesProps) {
    const { children } = props;
    const { id, className, style } = props;
    // const { title, description, author, date } = props;
    return (<div id='popular-articles' className={`flex flex-col w-full h-fit bg-[#EEF8FA] ${(className)? className:''}`} style={{...style}}>
        <div className='flex flex-row justify-between w-full h-fit sm:h-[88px]'>
            <div className='ml-[12px] sm:ml-0 flex flex-center w-[163px] h-[52px] sm:w-[200px] sm:h-[64px] gap-x-[4px] text-white text-[24px] leading-[32px] rounded-b-[7px] sm:rounded-tl-[7px] sm:border-r-[7px] sm:border-b-[7px] sm:border-white bg-[#59ABBD]'>
                <i className="size-[24px] bg-icon-party-popper"></i>
                <h3>熱門文章</h3>
            </div>
            <Link href='#' className='w-fit h-[52px] mt-[8px] mr-[12px] sm:mt-[36px] sm:mr-[36px]  p-[12px_20px] text-[#444FAE] text-base font-[700] rounded-[8px] border border-[2px] border-[#444FAE]' title='see more'>
                查看更多
            </Link>
        </div>
        <div className="items-container flex flex-col items-center md-1:flex-col md-1:items-center md-2:flex-row lg-1:flex-col lg-1:items-center lg-2:flex-row flex-wrap justify-center w-full h-fit p-[28px_12px_28px] md:px-[36px] gap-x-[16px] gap-y-[8px] sm:gap-y-[40px]">
            {children}
        </div>            
    </div>);
}

export { PopularArticles };