import { Module } from '@nestjs/common';
import { SkillResolver } from '@modules/skill/skill.resolver';
import { SkillService } from '@modules/skill/skill.service';
import { PrismaService } from '@shared/prisma/prisma.service';

@Module({
  imports: [],
  providers: [SkillResolver, SkillService, PrismaService],
})
export class SkillModule {}
