import { Provide} from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { Schema } from '../entity/schema';

@Provide()
export class SchemaService {
  
  @InjectEntityModel(Schema)
  schemaModel: Repository<Schema>;
  //向数据库里新增一条数据
 async save(schemaStr:string){
    // create a entity object
    const schema = new Schema();
    schema.schema = schemaStr;
    // save entity
    const schemaResult = await this.schemaModel.save(schema);
    // save success
    return schemaResult
  }
  async getLastestOne(){
     // find first
     const schemaResult = await this.schemaModel.findOne({
       select:['schema'],
       order:{id:'DESC'}
     });
     return schemaResult
  }
 
}
