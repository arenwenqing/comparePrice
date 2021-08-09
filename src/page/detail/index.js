import React, { useEffect, useState } from 'react'
import List from './components/list'
import { Toast } from 'antd-mobile';
import { useHistory } from 'react-router-dom'
import './index.less'
import API from './apis'
import $common from '@/utils'

let allData = []
const Detail = () => {
  const [data, setData] = useState([])
  const [selectActive, setSelectActive] = useState(0)
  const [siteData, setSiteData] = useState([])
  const [activeSite, setActiveSite] = useState(0)
  const [dataSource, setDataSource] = useState({})
  const [listData, setListData] = useState([])
  const [showAddBtn, setShowAddBtn] = useState(true)
  const history = useHistory()
  useEffect(() => {
    getDetail()
    getComparePrice($common.getUrlQuery('reid'))
  }, [])

  // 请求详情接口
  const getDetail = () => {
    API.getDetail({
      stid: $common.getUrlQuery('stid'),
      reid: $common.getUrlQuery('reid')
    }).then(res => {
      setDataSource(res.data ? res.data : {})
      setData(res.data.relations ? res.data.relations : [])
      setShowAddBtn(res.data.dresser_is_del)
    }).catch(err => {
      Toast.fail(err.error_msg, 1);
    })
  }

  // 获取比价列表
  const getComparePrice = (reid) => {
    API.getComparePrice({
      stid: $common.getUrlQuery('stid'),
      reid: reid,
      page: 1
    }).then(res => {
      setSiteData(res.data.comparelist_data ? res.data.comparelist_data : [])
      allData = res.data.product_group_list ? res.data.product_group_list : []
      setListData(res.data.product_group_list ? res.data.product_group_list.flat(Infinity) : [])
    }).catch(err => {
      Toast.fail(err.error_msg, 1);
    })
  }

  // 加入梳妆台
  const addDressingTable = () => {
    API.addDressingTable({
      stid: $common.getUrlQuery('stid'),
      reid: $common.getUrlQuery('reid'),
    }).then(res => {
      Toast.success('添加成功', 1);
    }).catch(err => {
      Toast.fail(err.error_msg, 1);
    })
  }

  // 移除梳妆台
  const removeDressingTable = () => {
    API.removeDressingTable({
      stid: $common.getUrlQuery('stid'),
      reid: $common.getUrlQuery('reid'),
    }).then(res => {
      Toast.success('移除成功', 1);
    }).catch(err => {
      Toast.fail(err.error_msg, 1);
    })
  }

  // 返回
  const goBack = () => {
    history.go(-1)
  }

  const choiceItem = (id, data) => {
    setSelectActive(id)
    getComparePrice(data.relation_id)
  }

  const choiceSite = (index, value) => {
    setActiveSite(index)
    let arr = allData.flat(Infinity)
    if (value !== '') {
      let filterArr = arr.filter(item => item.platform_id === value * 1)
      setListData(filterArr)
    } else {
      setListData(arr)
    }
  }

  return <div className='detail-wrapper'>
    <div className='detail-wrapper-top'>
      <div className='detail-top'>
        <div className='detail-back' onClick={goBack}></div>
        <div className='detail-show-img-wrapper'>
          <img className='detail-show-img' alt='' src={dataSource.pic} />
          <div className='detail-show-text'>{dataSource.title}</div>
        </div>
        <div className='detail-list'>
          {
            data.map((item, i) => {
              return <div className={ selectActive === i ? 'detail-list-item item-active' : 'detail-list-item'} key={i} onClick={choiceItem.bind(this, i, item)}>
                <div className='detail-list-img-wrapper'>
                  <img className='detail-list-item-img' src={item.pic} alt='' />
                </div>
                <div className={selectActive === i ? 'detail-list-item-model' : 'detail-list-item-model item-model-color'}>{item.relation_name}</div>
                <div className={selectActive === i ? 'detail-list-item-text' : 'detail-list-item-text item-text-color'}>{item.name}</div>
                <div className='detail-list-item-price'>
                  <label>￥{item.price_min}</label>
                  <label>起</label>
                </div>
              </div>
            })
          }
        </div>
        <div className='detai-price-site'>
          {
            siteData.map((item, i) => {
              return <div className={activeSite === i ? 'detail-price-item detail-price-item-active' : 'detail-price-item'} key={i} onClick={choiceSite.bind(this, i, item.value)}>
              <span>{item.name}</span>
              <span>￥{item.price}</span>
            </div>
            })
          }
        </div>
      </div>
      <List listData={listData}></List>
    </div>
    <div className='detail-bottom'>
      {
        !showAddBtn ? <span onClick={addDressingTable}>加入梳妆台</span> : <span onClick={removeDressingTable}>从梳妆台移除</span>
      }
      {/* <span onClick={addDressingTable}>加入梳妆台</span>
      <span onClick={removeDressingTable}>从梳妆台移除</span> */}
    </div>
  </div>
}
export default Detail