import React, { useEffect, useState, useRef } from 'react'
import NoCollect from './components/noCollect'
import HaveCollect from '../components/list'
import { useHistory } from 'react-router-dom'
import { Toast } from 'antd-mobile';
import Login from '../login'
import API from './apis'
import './index.less'

const Collect = () => {
  const [dataList, setDataList] = useState([])
  const [showLogin, setShowLogin] = useState(false)
  const [useData, setUseData] = useState({})
  // const [flag, setFlag] = useState(false)
  const loginRef = useRef()
  const history = useHistory()
  useEffect(() => {
    getUser()
    getDresserTable()
  }, [])

  // 校验用户
  const getUser = () => {
    API.getUser({}).then(res => {
      setUseData(res.data)
    }).catch(err => {
      if (err.code === 1005) {
        setShowLogin(true)
      }
      Toast.fail(err.error_msg, 1);
    })
  }

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

  // 获取焦点
  const focusFun = () => {
    history.push({
      pathname: 'search'
    })
  }

  const login = () => {
    loginRef.current.show()
  }

  return <div className='collect-wrapper'>
    <Login ref={loginRef}></Login>
    <div className='collect-top'>
      <div className='collect-top-vip-wrapper'>
        {
          useData.is_vip ? <span className='collect-vip-icon'></span> : ''
        }
        {
          showLogin ? <span className='collect-vip-num' onClick={login}>点击登录</span> : <span className='collect-vip-num'>{useData.phone}</span>
        }
      </div>
      <div className='collect-title'>买化妆品，先找苏大侠比价</div>
      <div className='collect-search-wrapper'>
        <span className='collect-search-icon'></span>
        <input className='collect-search-input' type="text" placeholder='搜索你想买的化妆品，查看全网底价' onFocus={focusFun}></input>
      </div>
    </div>
    <div className='collect-content'>
      <div className='collect-content-title'>我的梳妆台</div>
      <div className='collect-content-list-wrapper'>
        {
          dataList.length ? <HaveCollect result={dataList}></HaveCollect> : <NoCollect></NoCollect>
        }
      </div>
    </div>
  </div>
}
export default Collect
