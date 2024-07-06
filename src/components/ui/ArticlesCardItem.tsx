'use client'
import Link from 'next/link';
import React from 'react';
import { UiPropsType } from '@/types/UiPropsType';

export interface ArticlesCardItemProps extends UiPropsType {
    locked?: boolean,
}

export const ArticlesCardItem: React.FC<ArticlesCardItemProps> = (props: ArticlesCardItemProps) => {
    const { id, className, style } = props;
    const { locked:isLocked } = props;
    return (
    <div className={`item relative flex flex-col gap-y-[8px] p-[20px] w-full min-h-[208px] sm:max-w-[384px] md-2:w-[calc((100%-16px)/2)] lg-1:w-[384] lg-2:w-[calc((100%-16px)/2)] bg-white rounded-[8px] shadow-[0_2px_4px_0px_#AEAEAE40] ${(className)? className:''}`}  style={{...style}}>
        { (isLocked) &&
            <i className='lock bg-icon-lock bg-[#59ABBD] rounded-full bg-center bg-no-repeat size-[36px] absolute top-[-20px] right-[8px] border'/>
        }
        <Link href='#' className='flex flex-col gap-y-[8px] sm:flex-row sm:justify-between sm:gap-x-[12px]' title='article'>
            <div className='order-2 sm:order-none sm:w-[68%]'>
                <h4 className='sm:truncate text-[20px] font-[700]'>探索歐洲之美：浪漫之都巴黎</h4>
                <p className='text-[16px] font-[400]'>在遊歷歐洲時, 巴黎總是一個令人心馳神往的目的地。這座浪漫之都以其迷</p>
            </div>
            <img src='tower.png' className='xs:order-1 w-full h-[140px] object-cover sm:w-[28%] sm:h-[100px] sm:aspect-square shrink-0 rounded-[8px]' alt='article thumbnail image'/>
        </Link>
        <Link href='#' className='flex flex-row items-center w-fit gap-x-[8px]' title='author'>
            <img  src='article-author.png' className='object-cover rounded-full size-[28px]' alt='article author'></img>
            <div className='h-[28px] text-base text-[#0F172A]'>Alexander Smith</div>
        </Link>
        <div className="flex flex-row gap-x-[12px] items-center text-[#94A3B8]">
            <div className='date text-[14px]'>2024 / 6 / 15</div>
            <div className='viewCount flex ml-auto w-fit gap-x-[4px]'>
                <div className='size-[24px] bg-icon-eye'></div>
                <div className='text-[14px]'>1002</div>
            </div>
            <div className='likeCount flex w-fit gap-x-[4px]'>
                <div className='size-[24px] bg-icon-heart'></div>
                <div className='text-[14px]'>233</div>
            </div>
            <div className='savedCount flex w-fit gap-x-[4px]'>
                <div className='size-[24px] bg-icon-bookmark'></div>
                <div className='text-[14px]'>112</div>
            </div>
        </div>
    </div>);
}
