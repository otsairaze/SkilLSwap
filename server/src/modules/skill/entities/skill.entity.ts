import { Field, ObjectType } from '@nestjs/graphql';
import { SkillStatus } from '../enums/skill-status.enum';

@ObjectType()
export class Skill {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field(() => SkillStatus)
  status: SkillStatus;
}
