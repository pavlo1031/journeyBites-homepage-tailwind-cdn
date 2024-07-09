'use client'
import Link from 'next/link';
import React from 'react';
import { ArticlesCardItem } from './ArticlesCardItem';
import { UiPropsType } from '@/types/UiPropsType';

interface RecommendedArticlesProp extends UiPropsType {
    children?: typeof ArticlesCardItem[],
}

const RecommendedArticles: React.FC<RecommendedArticlesProp> = (props: RecommendedArticlesProp) => {
    const { children = [] } = props;
    const { id, className, style } = props;
    return (<div id='recommended-articles' className={`flex flex-col w-full h-fit min-h-[250px] bg-[#EBEFFA] ${(className)? className:''}`} style={{...style}}>
        <div className='flex flex-row justify-between w-full h-fit sm:h-[88px]'>
            <div className='ml-[12px] sm:ml-0 p-[12px_24px] sm:p-[16px_32px] flex flex-center w-[163px] h-[52px] sm:w-[200px] sm:h-[64px] gap-x-[12px] sm:gap-x-[4px] text-white text-[24px] leading-[32px] rounded-b-[7px] sm:rounded-tl-[7px] sm:border-r-[7px] sm:border-b-[7px] sm:border-white bg-[#444FAE]'>
                <i className="size-[24px] bg-icon-thumb-up"></i>
                <h3 className='text-[20px] sm:text-[24px] w-[83px] h-[28px] sm:w-[100px] sm:h-[32px]'>推薦文章</h3>
            </div>
        </div>
        <div className="item-container flex flex-col items-center md-1:flex-col md-1:items-center md-2:flex-row lg-1:flex-col lg-1:items-center lg-2:flex-row flex-wrap justify-center w-full h-fit p-[28px_12px_28px] md:px-[36px] gap-x-[16px] gap-y-[8px] sm:gap-y-[40px]">
         { children.map((element, index) =>
            // Workaround: avoid build failure
            <ArticlesCardItem key={index} />
         )}
        </div>
    </div>);
}

export { RecommendedArticles };