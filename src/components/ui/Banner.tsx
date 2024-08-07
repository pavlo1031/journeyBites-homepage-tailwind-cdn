import { UiPropsType } from '@/types/UiPropsType';

interface BannerProps extends UiPropsType {
    
}

function Banner(props: BannerProps) {
    const { id, className, style } = props;
    return (<div className={`relative flex flex-row justify-center w-full h-[800px] px-0 md:pl-[6.25%] ${(className)? className:''}`} style={{...style}}>
        <div className='bg-banner-mobile sm:bg-banner bg-cover w-full h-full rounded-bl-none md:rounded-bl-[100px]'></div>
        <div className='absolute flex flex-col w-fit h-fit items-center sm:items-start inset-x-auto top-[304px] bottom-[304px] sm:left-[14%]'>
            <div className='leading-[48px] text-[40px] md:text-[48px] font-[900] text-white tracking-[5%]'>
              探索無限創意的樂園
            </div>
            <div className='leading-[36px] text-[25px] md:text-[30px] font-[500] text-white tracking-[5%] mt-[12px] sm:mt-[20px]'>
              和我們一起發現、分享和創造
            </div>
            <button className='align-center button button-filled button-size-2 rounded-[6px] mt-[28px] sm:mt-[36px]'>開始創作</button>
        </div>
    </div>);
}
  
export { Banner };