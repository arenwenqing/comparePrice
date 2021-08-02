import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './index.less'
const HaveCollect = (props) => {
  const [data, setData] = useState([])
  const history = useHistory()
  useEffect(() => {
    if (props.result && props.result.length) {
      setData(props.result)
    }
  }, [props.result])

  const skipDetail = (item) => {
    history.push({
      pathname:'/detail',
      search: `?stid=${item.standard.standard_id}&reid=${item.standard.relation_id}`
    })
  }

  return <div className='have-collect-wrapepr'>
    {
      data.map((item, i) => {
        return <div className='collect-item' key={i} onClick={skipDetail.bind(this, item)}>
        <img src={item.standard.pic} alt={item.standard.title} />
        <span className='collect-text'>{item.standard.title}</span>
        <span className='collect-text-tip'>{item.standard.props.toString()}</span>
        <span className='collect-text-bottom'>
          <label className='collect-text-price'>
            <label>￥</label>
            <label>{item.standard.price_min}</label>
            <label>起</label>
          </label>
          <label className='collect-text-num'>
            <label>{item.standard.item_count}</label>
            <label>个店铺在售</label>
          </label>
        </span>
      </div>
      })
    }
  </div>
}
export default HaveCollect