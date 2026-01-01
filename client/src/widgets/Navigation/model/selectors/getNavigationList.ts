import { Handshake, InfoIcon } from 'lucide-react';
import type { NavigationListTypes } from '@/widgets/Navigation';

export const getNavigationList = (): NavigationListTypes[] => {
  return [
    {
      href: '/info',
      icon: InfoIcon,
      title: 'Info',
    },
    {
      href: '/about',
      icon: Handshake,
      title: 'About',
    },
  ];
};
