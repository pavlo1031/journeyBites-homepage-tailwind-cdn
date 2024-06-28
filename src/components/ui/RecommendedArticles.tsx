'use client'
import Link from 'next/link';
import { ArticlesCardItem } from './ArticlesCardItem';
import UiPropsType from '@/types/UiPropsType';

interface RecommendedArticlesProp extends UiPropsType {
    children?: ArticlesCardItem[]
}

function RecommendedArticles(props: RecommendedArticlesProp) {
    const { children } = props;
    const { id, className, style } = props;
    return (<div id='recommended-articles' className={`flex flex-col w-full h-fit bg-[#EBEFFA] ${(className)? className:''}`} style={{...style}}>
        <div className='flex flex-row justify-between w-full h-fit sm:h-[88px]'>
            <div className='ml-[12px] sm:ml-0 flex flex-center w-[163px] h-[52px] sm:w-[200px] sm:h-[64px] gap-x-[4px] text-white text-[24px] leading-[32px] rounded-b-[7px] sm:rounded-tl-[7px] sm:border-r-[7px] sm:border-b-[7px] sm:border-white bg-[#444FAE]'>
                <i className="size-[24px] bg-icon-thumb-up"></i>
                <h3>推薦文章</h3>
            </div>
        </div>
        <div className="items-container flex flex-col items-center md-1:flex-col md-1:items-center md-2:flex-row lg-1:flex-col lg-1:items-center lg-2:flex-row flex-wrap justify-center w-full h-fit p-[28px_12px_28px] md:px-[36px] gap-x-[16px] gap-y-[8px] sm:gap-y-[40px]">
            {children.map((cardItem) => cardItem)}
        </div>            
    </div>);
}

export { RecommendedArticles };