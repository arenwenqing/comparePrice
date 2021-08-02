import { getRequestsByRoot } from 'axios-service'
import srcConfig from '@/src/config/apiRoots'

const { get } = getRequestsByRoot({ root: srcConfig.root })
class Apis {
  /**
   * 详情接口
   */
  getDetail = get('api/query/detail', {}, { autoLoading: false })

  /**
   * 比价接口
   */
  getComparePrice = get('api/query/comparePrice', {}, { autoLoading: false })

  /**
   * 加入梳妆台
   */
  addDressingTable = get('api/dresser/add', {}, { autoLoading: false })

  /**
   * 移除梳妆台
   */
   removeDressingTable = get('api/dresser/del', {}, { autoLoading: false })
}

export default new Apis()