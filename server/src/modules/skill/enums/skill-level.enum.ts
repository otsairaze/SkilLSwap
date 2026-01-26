import { registerEnumType } from '@nestjs/graphql';
import { SkillLevel } from '../../../../prisma/generated/prisma/enums';

registerEnumType(SkillLevel, {
  name: 'SkillLevel',
});

export { SkillLevel };
