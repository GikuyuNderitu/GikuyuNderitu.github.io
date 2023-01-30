import Icon, { LogoSize } from './icon';
import { Righteous } from '@next/font/google';

const righteous = Righteous({ weight: '400', subsets: ['latin'] })

const fontSizeMap = {
  'small': 'text-md inline-block',
  'medium': 'text-lg -ml-1 inline-block',
  'large': 'text-4xl -ml-4 inline-block',
}
export default function Logo({ size = 'medium' }: { size?: LogoSize }) {
  const sizeStyle = fontSizeMap[size] + " text-black dark:text-white";
  return <div className='flex flex-col sm:flex-row justify-center items-center pb-2'>
    <Icon size={size} />
    <span className={righteous.className + ' ' + sizeStyle}>typicalDev</span>
  </div>
}