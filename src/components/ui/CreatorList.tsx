'use client'
import Link from 'next/link';
import { UiPropsType } from '@/types/UiPropsType';

interface CreatorListProps extends UiPropsType {
    children?: any
}

function CreatorList(props: CreatorListProps) {
    const { children } = props;
    const { id, className, style } = props;
    // const { title, description, author, date } = props;
    return (<div id='creator-list' className={`relative flex flex-col w-full h-fit p-[36px] rounded-[7px] bg-white border-2 border-[#E2E8F0] ${(className)? className:''}`} style={{...style}}>
        <div className="flex flex-row flex-wrap w-full h-[88px] justify-between">
            <h3 className='text-[24px] leading-[32px] font-[500] sm:text-[30px] sm:leading-[36px] w-[125px] h-[32px] sm:w-[156px] sm:h-[36px]'>創作者列表</h3>
            <Link href='#' className='w-[96px] h-[44px] sm:w-[104px] sm:h-[52px] text-[#444FAE] text-[16px] leading-[28px] font-[700] rounded-[8px] border border-[2px] border-[#444FAE] p-[8px_16px] sm:p-[12px_20px]'>
                查看更多
            </Link>
        </div>
        <div className='items-container w-full h-full'>
            {children}
        </div>            
    </div>);
}

interface CreatorListItemProps extends UiPropsType {
    children?: string
}

function CreatorListItem(props : CreatorListItemProps) {
    const { children } = props;
    const { id, className, style } = props;
    return (<a className={`creatorlist-item flex flex-row w-full gap-[16px] py-[16px] border-b last:border-none ${(className)? className:''}`} style={{...style}}>
        <img src='creator-image.png' className='object-cover object-left-center w-[40px] h-[40px] rounded-full' alt="creator image" />
        <div className='flex flex-col gap-y-[4px]'>
            <h4 className='text-[20px] font-[700] leading-[28px]'>瑪雅·弗朗西斯</h4>
            <p className='w-full text-base font-[400] leading-[28px]'>瑪雅是一位對冒險充滿熱情的旅行者。她喜歡挑戰自己,探索世...</p>
        </div>
    </a>);
}

export { CreatorList, CreatorListItem };