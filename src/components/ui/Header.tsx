import Link from 'next/link';
function Header(props) {
    const { className, style } = props;
    return (<header className={`fixed shadow-md z-10 top-0 flex flex-row flex-center w-full h-[84px] py-[20px] bg-white ${(className)? className:''}`} style={{...style}}>
        <div className='flex flex-row justify-between w-[calc(100%-32px)] h-[44px] sm:w-[83%] lg:w-[90%] xxl:max-w-[1296px]'>
            <div className='flex flex-row justify-between items-center w-fit'>
                <div className='bg-logo-md bg-cover w-[160px] h-[20px] sm:w-[250px] sm:h-[24px] '></div>
                <div className='ml-[13%] text-[25px] font-[700] text-nowrap leading-7 hidden lg:block'>探索</div>
                <i className='bg-icon-search size-[24px] ml-[9%] shrink-0 hidden sm:block'></i>
            </div>
            <div className='flex flex-row items-center h-[44px] gap-x-[32px] 2xs:gap-x-[24px]'>
                <button className='text-base text-white text-nowrap rounded-md w-[99px] h-[44px] bg-[#444FAE] hidden md:block'>開始創作</button>
                <Link href='#' className='bg-icon-bell size-[24px]' title='通知' />
                <Link href='#' className='bg-icon-user size-[24px] 2xs:ml-[12px]' title='user' />
                <Link id='btn-openMenu' href='#' className='bg-icon-menu size-[24px] 2xs:ml-[12px] 2xs:block sm:hidden' title='menu' />
            </div>
        </div>
    </header>);
  }
  
  export { Header };