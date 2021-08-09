import { getRequestsByRoot } from 'axios-service'
import srcConfig from '@/src/config/apiRoots'

const { get } = getRequestsByRoot({ root: srcConfig.root })
class Apis {
  /**
   * 获取梳妆台
   */
  getDresserTable = get('api/dresser/query', {}, { autoLoading: false })

  /**
   * 用户信息
   */
  getUser = get('api/user/me', {}, { autoLoading: false })
}

export default new Apis()