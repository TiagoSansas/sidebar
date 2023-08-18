'use client';
import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';

export function useToogle() {
  return useContext(ThemeContext);
}
