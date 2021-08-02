import React, { useEffect, useState } from 'react'
import List from './components/list'
import './index.less'
import test from '@/assets/chanpin.png'

const Detail = () => {
  const [data, setData] = useState([])
  const [selectActive, setSelectActive] = useState(0)
  const [siteData, setSiteData] = useState([])
  const [activeSite, setActiveSite] = useState(0)
  useEffect(() => {
    const arr = new Array(10).fill('')
    setData(arr)
    setSiteData([{
      name: '全网',
      price: 200,
    }, {
      name: '京东',
      price: 189,
    }, {
      name: '天猫',
      price: 299,
    }])
  }, [])
  const choiceItem = (id) => {
    setSelectActive(id)
  }

  const choiceSite = (index) => {
    setActiveSite(index)
  }

  return <div className='detail-wrapper'>
    <div className='detail-top'>
      <div className='detail-back'></div>
      <div className='detail-show-img-wrapper'>
        <img className='detail-show-img' alt='' src={test} />
        <div className='detail-show-text'>Origins/悦目之源 菌菇水 韦博士灵芝焕能精华水 200ml</div>
      </div>
      <div className='detail-list'>
        {
          data.map((item, i) => {
            return <div className={ selectActive === i ? 'detail-list-item item-active' : 'detail-list-item'} key={i} onClick={choiceItem.bind(this, i)}>
              <div className='detail-list-img-wrapper'>
                <img className='detail-list-item-img' src={test} alt='' />
              </div>
              <div className={selectActive === i ? 'detail-list-item-model' : 'detail-list-item-model item-model-color'}>#999</div>
              <div className={selectActive === i ? 'detail-list-item-text' : 'detail-list-item-text item-text-color'}>新款哑光</div>
              <div className='detail-list-item-price'>
                <label>￥88</label>
                <label>起</label>
              </div>
            </div>
          })
        }
      </div>
      <div className='detai-price-site'>
        {
          siteData.map((item, i) => {
            return <div className={activeSite === i ? 'detail-price-item detail-price-item-active' : 'detail-price-item'} key={i} onClick={choiceSite.bind(this, i)}>
            <span>{item.name}</span>
            <span>￥{item.price}</span>
          </div>
          })
        }
      </div>
    </div>
    <List></List>
    <div className='detail-bottom'>
      <span>加入梳妆台</span>
      <span>从梳妆台移除</span>
    </div>
  </div>
}
export default Detail