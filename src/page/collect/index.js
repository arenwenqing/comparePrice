import React, { useEffect, useState } from 'react'
import NoCollect from './components/noCollect'
import HaveCollect from '../components/list'
import { Toast } from 'antd-mobile';
import API from './apis'
import './index.less'

const Collect = () => {
  const [dataList, setDataList] = useState([])
  useEffect(() => {
    getDresserTable()
  }, [])

  // 获取化妆台
  const getDresserTable = () => {
    API.getDresserTable({
      page: 1
    }).then(res => {
      res.data?.forEach(item => {
        item.standard = {
          pic: item.pic,
          title: item.title,
          props: item.props,
          price_min: item.price_min,
          standard_id: item.standard_id,
          relation_id: item.relation_id,
          relation_name: item.relation_name,
          item_count: item.item_count
        }
      });
      setDataList(res.data ? res.data : [])
    }).catch(err => {
      Toast.fail(err.error_msg, 1);
    })
  }

  return <div className='collect-wrapper'>
    <div className='collect-top'>
      <div className='collect-top-vip-wrapper'>
        <span className='collect-vip-icon'></span>
        <span className='collect-vip-num'>135****6666</span>
      </div>
      <div className='collect-title'>买化妆品，先找苏大侠比价</div>
      <div className='collect-search-wrapper'>
        <span className='collect-search-icon'></span>
        <input className='collect-search-input' type="text" placeholder='搜索你想买的化妆品，查看全网底价'></input>
      </div>
    </div>
    <div className='collect-content'>
      <div className='collect-content-title'>我的梳妆台</div>
      {
        dataList.length ? <HaveCollect result={dataList}></HaveCollect> : <NoCollect></NoCollect>
      }
    </div>
  </div>
}
export default Collect
