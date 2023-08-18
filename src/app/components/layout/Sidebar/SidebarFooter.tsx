'use client';
import { useTheme } from '@/hooks/useTheme';
import { Navbar } from '../Navbar';

import {
  MoonIcon,
  SunIcon,
  ArrowDownTrayIcon,
} from '@heroicons/react/24/outline';
import { useToogle } from '@/hooks/useToogle';

export function SidebarFooter() {
  const { theme, setTheme } = useTheme();
  const { toogle } = useToogle();
  return (
    <div className='mt-80 space-y-2 font-medium '>
      <div>
        <ul>
          <Navbar.Root>
            <Navbar.Link link='#'>
              <div className='-rotate-90'>
                <Navbar.Icon icon={ArrowDownTrayIcon} />
              </div>
              <Navbar.Placeholder text='Sair' />
            </Navbar.Link>
          </Navbar.Root>
        </ul>
      </div>
      <div className=' flex content-center items-center justify-between'>
        <div className={`${toogle ? 'visible' : 'hidden'}`}>
          <ul>
            <Navbar.Root>
              <Navbar.Link link='#'>
                <Navbar.Icon icon={MoonIcon} />
                <Navbar.Placeholder text='Darkmode' />
              </Navbar.Link>
            </Navbar.Root>
          </ul>
        </div>
        <div>
          <label className='relative inline-flex cursor-pointer items-center'>
            <input
              type='checkbox'
              value=''
              className='peer sr-only'
              onClick={() => setTheme(!theme)}
            />
            <div className="peer flex h-6 w-11  items-center justify-between rounded-full bg-gray-200 p-1 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-transparent dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800">
              <MoonIcon />
              <SunIcon />
            </div>
          </label>
        </div>
        <input
          type='checkbox'
          className='peer absolute opacity-0'
          onClick={() => setTheme(!theme)}
        />
      </div>
    </div>
  );
}
