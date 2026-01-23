import { Field, ObjectType } from '@nestjs/graphql';
import { SkillLevel } from '../enums/skill-level.enum';
import { Skill } from '@modules/skill/entities/skill.entity';

@ObjectType()
export class UserSkill {
  @Field()
  userId: number;

  @Field()
  skillId: number;

  @Field()
  confirmed: boolean;

  @Field(() => SkillLevel)
  level: SkillLevel;

  @Field(() => Skill)
  skill: Skill;
}
