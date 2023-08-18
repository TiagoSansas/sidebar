import Link from 'next/link';
import { ReactNode } from 'react';

interface NavbarLinkProps {
  link: string;
  children: ReactNode;
}
export function NavbarLink({ link, children }: NavbarLinkProps) {
  return (
    <Link
      href={link}
      className='group flex items-center rounded-lg p-2 text-gray-900  hover:bg-gray-200   dark:text-white dark:hover:bg-gray-700'
    >
      {children}
    </Link>
  );
}
