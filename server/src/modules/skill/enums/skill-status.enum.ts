import { registerEnumType } from '@nestjs/graphql';
import { SkillStatus } from '../../../../prisma/generated/prisma/enums';

registerEnumType(SkillStatus, {
  name: 'SkillStatus',
});

export { SkillStatus };
