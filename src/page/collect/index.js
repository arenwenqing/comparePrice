import React from 'react'
import NoCollect from './components/noCollect'
import HaveCollect from '../components/list'
import './index.less'

const Collect = () => {
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
      {/* <NoCollect></NoCollect> */}
      <HaveCollect></HaveCollect>
    </div>
  </div>
}
export default Collect