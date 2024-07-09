'use client'
import Link from 'next/link';
import React from 'react';
import { UiPropsType } from '@/types/UiPropsType';
import { CreatorData } from '@/model/CreatorData';

// 示例樣本資料
import { data } from '@/data/creators';

interface CreatorListProps extends UiPropsType {
    children?: typeof CreatorListItem[]
}

function CreatorList(props: CreatorListProps) {
    const { children = [] } = props;
    const { id, className, style } = props;
    return (<div id='creator-list' className={`relative flex flex-col w-full h-fit p-[36px] rounded-[7px] bg-white border-2 border-[#E2E8F0] ${(className)? className:''}`} style={{...style}}>
        <div className="flex flex-row flex-wrap w-full h-[88px] justify-between">
            <h3 className='text-[24px] leading-[32px] font-[500] sm:text-[30px] sm:leading-[36px] w-[125px] h-[32px] sm:w-[156px] sm:h-[36px]'>創作者列表</h3>
            <Link href='#' className='w-[96px] h-[44px] sm:w-[104px] sm:h-[52px] text-[#444FAE] text-[16px] leading-[28px] font-[700] rounded-[8px] border border-[2px] border-[#444FAE] p-[8px_16px] sm:p-[12px_20px]'>
                查看更多
            </Link>
        </div>
        <div className='item-container w-full h-full'>
         { data.map((item: CreatorData) => 
            <CreatorListItem key={item.id} data={item} />
         )}
        </div>            
    </div>);
}

interface CreatorListItemProps extends UiPropsType {
    children?: string,
    data: CreatorData,
}

const CreatorListItem: React.FC<CreatorListItemProps> = (props : CreatorListItemProps) => {
    const { children = '' } = props;
    const { id, className, style } = props;
    const { data } = props;
    return (<a className={`creatorlist-item flex flex-row w-full gap-[16px] py-[16px] border-b last:border-none ${(className)? className:''}`} style={{...style}}>
        <img src={data.imageURL} className='object-cover object-left-center w-[40px] h-[40px] rounded-full' alt="creator image" />
        <div className='flex flex-col gap-y-[4px]'>
            <h4 className='text-[16px] leading-[28px] sm:text-[20px] font-[700]'>{data.name}</h4>
            <p className='w-full text-base font-[400] text-[14px] leading-[20px] sm:text-[16px] sm:leading-[28px]'>{data.description}</p>
        </div>
    </a>);
}

export { CreatorList, CreatorListItem };