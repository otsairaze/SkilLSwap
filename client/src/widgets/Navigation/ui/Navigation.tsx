'use client';

import { memo } from 'react';
import { NavigationList } from '@/widgets/Navigation/ui/NavigationList';
import { NavigationButton } from '@/widgets/Navigation/ui/NavigationButton';
import { ThemeSwitcher } from '@/features/ThemeSwitcher/ui/ThemeSwitcher';

interface NavigationProps {
  onOpen?: () => void;
}

export const Navigation = memo((props: NavigationProps) => {
  const {} = props;

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
