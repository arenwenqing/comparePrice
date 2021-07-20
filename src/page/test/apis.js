
import { getRequestsByRoot } from 'axios-service'
import srcConfig from '@/src/config/apiRoots'

const { get } = getRequestsByRoot({ root: srcConfig.root })
class Apis {
  /**
   * 流程发起-表单控件
   */
   getUserInfo = get('workflow/api/v1/organization/user', {}, { autoLoading: false })
}

export default new Apis()
