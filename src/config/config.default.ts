export const middleware = ['errorMiddleware']
/**
 * 单数据库实例
 */
 export const orm = {
  type: 'mysql',
  host: '',
  port: 3306,
  username: '',
  password: '',
  database: 'blog',
  synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true
  logging: false,
};