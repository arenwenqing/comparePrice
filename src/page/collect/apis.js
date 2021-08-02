import { getRequestsByRoot } from 'axios-service'
import srcConfig from '@/src/config/apiRoots'

const { get } = getRequestsByRoot({ root: srcConfig.root })
class Apis {
  /**
   * 流程发起-表单控件
   */
  getDresserTable = get('api/dresser/query', {}, { autoLoading: false })
}

export default new Apis()