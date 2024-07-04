'use client'
import Link from 'next/link';
import { UiPropsType } from '@/types/UiPropsType';

interface AttractionsProps extends UiPropsType {
    children?: any
}

function Attractions(props : AttractionsProps) {
    const { children } = props;
    const { id, className, style } = props;
    return (<div className={`flex flex-col w-full h-fit p-[36px] rounded-[7px] bg-white border border-2 border-[#E2E8F0] ${(className)? className:''}`} style={{...style}}>
        <h3 className='text-[24px] leading-[32px] sm:text-[30px] sm:leading-[36px] font-[500] w-[100px] h-[32px] sm:w-[125px] sm:h-[36px]'>熱門景點</h3>
        <div className='bg-curveline bg-auto bg-repeat-x bg-left-top w-[56px] h-[5px] mt-[12px]'></div>
        <div className="items-container flex flex-row flex-wrap self-center h-fit gap-x-[12px] gap-y-[16px] p-0 mt-[28px]">
            {children}
        </div>
    </div>);
}


interface AttractionsItemProps extends UiPropsType {
    children?: string
}

function AttractionsItem(props : AttractionsItemProps) {
    const { children } = props;
    const { id, className, style } = props;
    return (<Link className='flex flex-center px-[16px] py-[4px] text-[#444FAE] text-base font-[700] min-w-[64px] h-[36px] rounded-full border-2 border-[#444FAE]' href='#'>
        {children}
    </Link>);
}

export { Attractions, AttractionsItem };