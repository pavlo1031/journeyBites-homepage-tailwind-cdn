'use client'
import Link from 'next/link';
import { useState } from 'react';
import { UiPropsType } from '@/types/UiPropsType';

interface HamburgerMenuProps extends UiPropsType {
    
}

function HamburgerMenu(props: HamburgerMenuProps) {

    const { id, className, style } = props;
    
    const [ isVisible, setVisible ] = useState<Boolean>(false);

    const handleOnClose = () => {
        setVisible(false);
    };

    return (<div className={`z-10 ${(isVisible)? '':'hidden'} p-[8px_12px_28px] flex flex-col fixed top-0 bottom-0 right-0 w-full sm:w-[320px] bg-[#EBEFFA] border-l border-gray-300 ${(className)? className:''}`} style={{...style}}>
        <div className='flex flex-row items-center h-[44px]'>
            <button id='btn-closeMenu' className='ml-auto text-[20px]' onClick={handleOnClose}>×</button>
        </div>
        <div className='flex flex-col justify-start w-full h-fit'>
            <div id='menu-searchbar' className='flex flex-row items-center gap-x-[12px] p-[10px_12px] h-[44px] my-[8px] bg-white rounded-[8px] border border-[#E2E8F0]'>
                <i className='bg-icon-search text-[#444FAE] size-[24px] shrink-0'></i>
                <input contentEditable className='focus:outline-0 w-full ' placeholder='Search'></input>
            </div>
            <div className='p-[8px] gap-y-[4px]'>
                <div className='h-[28px] font-[700] text-[#444FAE]'>探索</div>
                <ul className='item-container w-full h-fit font-[400]'>
                    <li className='h-[44px] active:bg-[#444FAE] active:text-white active:rounded-[8px] p-[8px]'><Link href='#' className='w-full block'>熱門文章</Link></li>
                    <li className='h-[44px] active:bg-[#444FAE] active:text-white active:rounded-[8px] p-[8px]'><Link href='#' className='w-full block'>最新文章</Link></li>
                    <li className='h-[44px] active:bg-[#444FAE] active:text-white active:rounded-[8px] p-[8px]'><Link href='#' className='w-full block'>所有分類</Link></li>
                    <li className='h-[44px] active:bg-[#444FAE] active:text-white active:rounded-[8px] p-[8px]'><Link href='#' className='w-full block'>台灣旅遊地圖</Link></li>
                    <li className='h-[44px] active:bg-[#444FAE] active:text-white active:rounded-[8px] p-[8px]'><Link href='#' className='w-full block'>步道旅行</Link></li>
                    <li className='h-[44px] active:bg-[#444FAE] active:text-white active:rounded-[8px] p-[8px]'><Link href='#' className='w-full block'>健行日記</Link></li>
                    <li className='h-[44px] active:bg-[#444FAE] active:text-white active:rounded-[8px] p-[8px]'><Link href='#' className='w-full block'>創作者列表</Link></li>
                    <li className='h-[44px] active:bg-[#444FAE] active:text-white active:rounded-[8px] p-[8px]'><Link href='#' className='w-full block'>旅遊食記</Link></li>
                    <li className='h-[44px] active:bg-[#444FAE] active:text-white active:rounded-[8px] p-[8px]'><Link href='#' className='w-full block'>台灣百岳</Link></li>
                </ul>
            </div>
        </div>
        <div id='menu-buttons-guest' className='mt-auto flex flex-row gap-x-[24px] w-full h-fit'>
            <button className='w-[calc((100%-24px)/2)] h-[44px] rounded-[6px] font-[700] text-[#444FAE] border border-2 border-[#444FAE]'>登入</button>
            <button className='w-[calc((100%-24px)/2)] h-[44px] rounded-[6px] font-[700] text-[#EBEFFA] bg-[#444FAE] border border-2 border-[#444FAE]'>註冊</button>
        </div>
        <div id='menu-buttons-login' className='flex flex-row gap-x-[24px] w-full h-fit'>
            <button className='w-full h-[44px] rounded-[6px] font-[700] text-[#EBEFFA] bg-[#444FAE] border border-2 border-[#444FAE]'>開始</button>
        </div>
    </div>);
}

export { HamburgerMenu };