import Link from 'next/link';
import { UiPropsType } from '@/types/UiPropsType';

interface HeaderProps extends UiPropsType {
    
}

function Header(props: HeaderProps) {
    const { className, style } = props;
    return (<header className={`fixed shadow-md z-10 top-0 flex flex-row justify-between w-full h-[84px] py-[20px] bg-white ${(className)? className:''}`} style={{...style}}>
        <div className='flex flex-row justify-between items-center w-full h-fit'>
        <div className='flex flex-row justify-between items-center w-fit ml-[16px] sm:ml-[30px] md:ml-[16.25%]'>
            <img src='logo-sm.svg' className='object-cover w-[160px] h-[20px] lg:w-[199px] lg:h-[26px] ml-[16px]' alt='jouney bites' />
            <div className='ml-[13%] text-[20px] font-[700] text-nowrap leading-[28px] hidden lg:block'>探索</div>
            <i className='bg-icon-search size-[24px] sm:ml-[32px] shrink-0 hidden sm:block' />
        </div>
        <div className='flex flex-row items-center h-[44px] gap-x-[32px] 2xs:gap-x-[24px] mr-[12px] sm:mr-[30px] md-2:mr-[16.25%]'>
            <button className='text-base text-white text-nowrap rounded-md w-[99px] h-[44px] bg-[#444FAE] hidden sm-2:block'>開始創作</button>
            <Link href='#' className='bg-icon-bell size-[24px]' title='通知' />
            <Link href='#' className='bg-icon-user size-[24px] 2xs:ml-[12px]' title='user' />
            <Link id='btn-openMenu' href='#' className='bg-icon-menu size-[24px] 2xs:ml-[12px] 2xs:block sm:hidden' title='menu' />
        </div>
        </div>
    </header>);
  }
  
  export { Header };