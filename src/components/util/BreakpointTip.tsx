'use client';
import { useEffect, useState } from 'react';
import { UiPropsType } from '@/types/UiPropsType';

interface BreakpointTipProps extends UiPropsType {
    showsResolution?: boolean,
    debugMode?: boolean,

    top?: number | string,
    bottom?: number | string,
    left?: number | string,
    right?: number | string,
}

const BreakpointTip: React.FC<BreakpointTipProps> = (props: BreakpointTipProps) => {
    const { id, className, style, ...otherProps } = props;
    const { showsResolution } = otherProps;
    const { debugMode } = otherProps;

    // position, offsets
    const { top = 5, left = 10, bottom, right } = otherProps;
    // Sizes
    const [width, setWidth] = useState<number>(0);  
    const [height, setHeight] = useState<number>(0);
    // breakpoint tip
    const [breakpoint, setBreakpoint] = useState<string>('');

    // 載入時初始化
    useEffect(() => {
        if (debugMode) console.log('\n### onMount:');
        const handleOnResize = () => {
          if (debugMode) {
            console.log('\n### onResize()');
          }
          // 在window resize時，取出window長寬 ➜ update到變數
          setWidth(() => window.innerWidth);
          setHeight(() => window.innerHeight);
        };
  
        window.addEventListener('resize', handleOnResize);
        window.document.body.style.position = 'relative';
  
        // 呼叫第一次初始化
        handleOnResize();
  
        // on unmount
        return () => window.removeEventListener('resize', handleOnResize);
    }, []);

    // width, height 被更新後
    useEffect(() => {
        if (debugMode) {
          console.info('width or height value is updated!');
          console.info(' ➜ width:', width);
          console.info(' ➜ height:', height);
        }

        // 依width大小去計算它的breakpoint名稱 (xs, sm, lg, xl, 2xl, ...)
        const newBreakpoint:string = computeBreakpointName(width, debugMode);
        // update到變數
        setBreakpoint(newBreakpoint);
    }, [width.toString(), height.toString()]);

    useEffect(() => {
        // 透過變數名取出值, 確認更新結果
        if (debugMode) {
            console.info(' ➜ breakpoint:', breakpoint);
        }
    }, [breakpoint]);

    return (<div className={`z-10 fixed top-[20px] left-[15px] text-[20px] text-blue-600 font-[500] ${(className)? className:''}`} style={{...style}}>
        <div className=''>{breakpoint}</div>
        { showsResolution && (
        <div>{width} × {height}</div>
        ) }
    </div>)
};

function computeBreakpointName(width: number, debugMode:boolean) {
    if (debugMode) console.log('**** computeBreakpointName(), width:', width);  
    try {
      // xs
      if (width <= 500) {
        if (debugMode) console.log('  ⇒ width <= 500 ➜ xs');
        return 'xs';
      }
      // sm
      else if (width > 500 && width < 768) {
        if (debugMode) console.log('  ⇒ width > 500 && width < 768 ➜ sm');
        return 'sm';
      }
      // md
      else if (width >= 768 && width < 1024) {
        if (debugMode) console.log('  ⇒ width >= 768 && width < 1024 ➜ md');
        return 'md';
      }
      // lg
      else if (width >= 1024 && width < 1400) {
        if (debugMode) console.log('  ⇒ width >= 1024 && width < 1400 ➜ lg');
        return 'lg';
      }
      // xl
      else if (width >= 1400 && width < 1920) {
        if (debugMode) console.log('  ⇒ width >= 1400 && width < 1920 ➜ xl');
        return 'xl';
      }
      // 2xl
      else if (width >= 1920) {
        if (debugMode) console.log('  ⇒ width >= 1920 ➜ 2xl');
        return '2xl';
      }
      return '';
    }
    finally {
      if (debugMode) 
        console.log('\n');    
    }
  }

export { BreakpointTip };