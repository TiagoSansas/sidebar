'use client';
import { useToogle } from '@/hooks/useToogle';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { ReactNode } from 'react';

interface SidebarRootProps {
  children: ReactNode;
}

export function SidebarRoot({ children }: SidebarRootProps) {
  const { toogle, setToogle } = useToogle();

  const menuToogle = () => {
    setToogle(!toogle);
  };

  return (
    <div
      className={`
        left-0 
        top-0 
        h-screen
        ${toogle ? 'w-56' : 'w-20'}
         border bg-gray-50 px-3 py-4
        transition-all duration-200
        dark:border-gray-600
        dark:bg-gray-800 
        
      `}
    >
      <span
        className='relative -right-6  ml-auto flex h-6 w-6 translate-y-2/4 cursor-pointer  items-center justify-center  rounded-full  bg-violet-600
        duration-200
        hover:-rotate-180
        hover:ease-in-out'
        onClick={menuToogle}
      >
        {toogle ? (
          <ChevronRightIcon className='h-5 w-5 text-white' />
        ) : (
          <ChevronLeftIcon className='h-5 w-5 text-white' />
        )}
      </span>
      {children}
    </div>
  );
}
