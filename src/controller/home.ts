import axios from 'axios'
import { Inject, Provide, Controller, Get,
} from '@midwayjs/decorator';
import { Context } from '@midwayjs/faas';

@Provide()
@Controller('/')
export class HomeController {
  @Inject()
  ctx: Context;

  @Get('/')
  async home() {
      const result = await axios.get('http://statics.jrmoses.top/code/index.html')
      return result.data
  }
  @Get('/admin')
  async admin() {
      const result = await axios.get('http://statics.jrmoses.top/code/admin.html')
      return result.data
  }

}
