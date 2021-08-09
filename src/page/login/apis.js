import { getRequestsByRoot } from 'axios-service'
import srcConfig from '@/src/config/apiRoots'

const { get, post } = getRequestsByRoot({ root: srcConfig.root })
class Apis {
  /**
   * 检查手机号是否已注册
   */
  checkPhone = get('api/user/checkUser', {}, { autoLoading: false })

  /**
   * 获取短信验证码
   */
  getCode = post('api/user/sendSms', {}, { autoLoading: false })

  /**
   * 用户登录接口
   */
  login = post('api/user/login', {}, { autoLoading: false })
}

export default new Apis()