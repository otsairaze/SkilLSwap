import type { User } from '../types/user.types';

export type MeResponse = {
  me: User;
};

export type MeQueryVariables = Record<string, never>;
