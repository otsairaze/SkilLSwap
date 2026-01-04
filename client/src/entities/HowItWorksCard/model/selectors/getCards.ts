import { Search, User } from 'lucide-react';
import type { CardListTypes } from '../types/cardList';

export const getCards = (): CardListTypes[] => {
  return [
    {
      title: 'How',
      titleCard: 'Find you match',
      description: 'Find your perfect skill partner.',
      firstImage: Search,
      number: '01',
      secondImage: User,
    },
    {
      title: 'SkillSwap',
      titleCard: 'Collaborate & Connect',
      description: 'Connect, schedule, collaborate.',
      firstImage: Search,
      number: '02',
      secondImage: User,
    },
    {
      title: 'Works',
      titleCard: 'Learn & Grow',
      description: 'Learn by doing together.',
      firstImage: Search,
      number: '03',
      secondImage: User,
    },
  ];
};
