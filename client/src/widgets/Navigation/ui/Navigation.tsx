'use client';

import { memo } from 'react';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { NavigationList } from './NavigationList';
import { NavigationButton } from './NavigationButton';

export const Navigation = memo(() => {
  return (
    <div className={'flex items-center justify-between'}>
      <div>
        <p className={'text-base'}>SKillSwap</p>
      </div>
      <div className={'flex gap-[15px] items-center'}>
        <NavigationList />
        <ThemeSwitcher />
        <NavigationButton />
      </div>
    </div>
  );
});
