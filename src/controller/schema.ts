import { Inject, Provide, Controller, Get, Post,Body,Validate,ALL,
} from '@midwayjs/decorator';
import { Context } from '@midwayjs/faas';
import { SchemaService } from '../service/schema'
import {SchemaSaveDTO} from '../dto/schema';
import { getStandardResponse } from '../util/common'
@Provide()
@Controller('/api/schema/')
export class SchemaController {
  @Inject()
  ctx: Context;
  
  @Inject()
  schemaService:SchemaService

  @Get('/getLastestOne')
  async getLastestOne() {
    
      const result =  await this.schemaService.getLastestOne();
      return getStandardResponse(true,result)
  } 

  @Post('/save')
  @Validate()
  async save(@Body(ALL) bodyObj:SchemaSaveDTO) {
    const result =  await this.schemaService.save(bodyObj.schema)
    return result;
  }
}
