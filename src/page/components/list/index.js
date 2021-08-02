import React, { useEffect, useState } from 'react'
import './index.less'
const HaveCollect = (props) => {
  const [data, setData] = useState([])
  useEffect(() => {
    if (props.result && props.result.length) {
      setData(props.result)
    }
  }, [props.result])
  return <div className='have-collect-wrapepr'>
    {
      data.map((item, i) => {
        return <div className='collect-item' key={i}>
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