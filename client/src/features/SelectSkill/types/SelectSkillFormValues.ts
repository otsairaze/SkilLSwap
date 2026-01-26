import type { SelectSkill } from '@/features/SelectSkill';
import type { z } from 'zod';

export type SelectSkillFormValues = z.infer<typeof SelectSkill>;
