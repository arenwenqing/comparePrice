import React, { useEffect, useState } from 'react'
import './index.less'

const List = (props) => {
  const [data, setData] = useState([])
  const iconMap = {
    0: 'tian-mao',
    1: 'tiao-bao',
    2: 'jing-dong'
  }
  useEffect(() => {
    if (props.listData?.length) {
      setData(props.listData)
    } else {
      setData([])
    }
  }, [props.listData])
  return <div className='detail-list'>
    {
      data.map((item, i) => {
        return <div key={i}>
          <div className='detail-list-item'>
          <div className='detail-list-item-li'>
            <span className='detail-list-item-name'>
              <i className={iconMap[item.platform_id]}></i>
              <label>{item.title}</label>
            </span>
            <span className='detail-list-item-pirce-text'>
              {item.return_type_name}
            </span>
          </div>
          <div className='detail-list-item-price'>
            <span>￥</span>
            <span>{item.final_price}</span>
          </div>
          <div className='detail-list-item-rate'>
            <span></span>
            <span className='detail-list-item-buy'>去购买</span>
          </div>
        </div>
        <div className='detail-list-driver'></div>
        </div>
      })
    }
  </div>
}
export default List
