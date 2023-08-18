import { ReactNode } from 'react';

interface NavbarContainerProps {
  children: ReactNode;
}
export function NavbarRoot({ children }: NavbarContainerProps) {
  return <li>{children}</li>;
}
