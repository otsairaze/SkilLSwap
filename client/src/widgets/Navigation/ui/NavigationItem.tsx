import { memo } from 'react';
import { cn } from '@/shared/lib/utils';
import type { NavigationListTypes } from '@/widgets/Navigation';

interface NavigationItemProps extends NavigationListTypes {
  className?: string;
}

export const NavigationItem = memo((props: NavigationItemProps) => {
  const { title, icon: Icon, className } = props;

  return (
    <li className={cn(className, 'flex gap-[5px] items-center')}>
      <Icon className='w-4 h-4' />
      <span>{title}</span>
    </li>
  );
});
