'use client';
import { useToogle } from '@/hooks/useToogle';

interface NavbarNameProps {
  text: string;
}
export function NavbarName({ text }: NavbarNameProps) {
  const { toogle } = useToogle();
  return (
    <span
      className={`ml-3 flex-1 whitespace-nowrap ${
        toogle ? 'visible' : 'hidden'
      }`}
    >
      {text}
    </span>
  );
}
