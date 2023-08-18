import { ElementType } from 'react';

interface NavbarIconProps {
  icon: ElementType;
}

export function NavbarIcon({ icon: Icon }: NavbarIconProps) {
  return (
    <Icon className='m-auto h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white' />
  );
}
