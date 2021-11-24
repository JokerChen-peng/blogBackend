import { Inject, Provide, Controller, Post,Body,Validate,ALL,
} from '@midwayjs/decorator';
import { Context } from '@midwayjs/faas';
import * as jwt from 'jsonwebtoken';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { User } from '../entity/user';
import { getStandardResponse } from '../util/common';
/**
 * 登录
 */
@Provide()
@Controller('/api/login')
export class LoginController {
  @Inject()
  ctx: Context;
  
  @InjectEntityModel(User)
  userModel: Repository<User>;

   /**
   * 登录
   * @param login
   */
    @Post('/')
    @Validate()
    async login(@Body(ALL)login:any) {
        
        const { username, password } = login.data;
       
        const user = await this.userModel.findOne( {username} );
       
        // 校验用户
        if (user) {
          if (user.password !== password) {
           return getStandardResponse(false,'','账户或密码不正确~')
          }
        } else {
          return getStandardResponse(false,'','账户或密码不正确~')
        }
        // 生成token
        const result = {
          token: await this.generateToken(user,2 * 3600),
        };
        return getStandardResponse(true,result)
      }
    /**
     * 生成token
     * @param user 用户对象
     * @param expire 过期
     */
    async generateToken(user,expire) {
      const tokenInfo = {
        username: user.username,
        password: user.password,
      };
      return jwt.sign(tokenInfo, 'FOAPOFALOEQIPNN', {
        expiresIn: expire,
      });
    }
   
}
