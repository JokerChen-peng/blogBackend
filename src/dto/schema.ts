
import { Rule, RuleType } from '@midwayjs/decorator';

export class SchemaSaveDTO {
  @Rule(RuleType.string().required())
  schema: string;
}
