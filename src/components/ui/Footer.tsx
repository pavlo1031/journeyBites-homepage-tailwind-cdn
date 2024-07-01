import Link from 'next/link';
import { UiPropsType } from '@/types/UiPropsType';

interface FooterProps extends UiPropsType {
    
}

function Footer(props: FooterProps) {
    const { className, style } = props;
    return (<footer className={`flex flex-col flex-center py-[48px] min-w-[375px] w-full h-[375px] xs:h-[262px] bg-white ${(className)? className:''}`} style={{...style}}>
        <div className='bg-logo-lg bg-cover w-[300px] h-[38px] 2xs:w-[200px] 2xs:h-[26px]'></div>
        <div className='bg-curveline bg-cover w-[67px] h-[5px] mt-[20px]'></div>
        <ul className='flex flex-row mt-[36px] gap-x-[16px] leadig-7 text-nowrap font-[700] 2xs:text-[16px] sm:text-[18px] lg:text-[20px]'>
            <li><Link href='#' className=''>關於我們</Link></li>|
            <li><Link href='#' className=''>會員條款</Link></li>|
            <li><Link href='#' className=''>隱私權政策</Link></li>
        </ul>
        <div className='text-base mt-[12px]'>
            &copy;2024 Journey Bites
        </div>
    </footer>);
  }
  
  export { Footer };