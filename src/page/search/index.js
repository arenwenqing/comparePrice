import React, { useEffect, useState } from 'react'
import NoSearch from './components/noSearch'
import HaveSearch from '../components/list'
import { Toast } from 'antd-mobile';
import $common from '@/utils'
import './index.less'
import API from './apis'

let currentInput = ''
const Search = () => {
  const [showSearchResult, setShowSearchResult] = useState([])
  // const [flag, setFlag] = useState(false)
  const [searchValue, setSearchValue] = useState(undefined)
  const inputChange = (e) => {
    currentInput = e.target.value.trim()
    setSearchValue(currentInput)
  }

  const keypress = (e) => {
    if (e.keyCode === 13) {
      window.location.replace(`${window.location.origin}${window.location.pathname}?keyword=${currentInput}`)
    }
  }

  useEffect(() => {
    if ($common.getUrlParam('keyword')) {
      setSearchValue($common.getUrlParam('keyword'))
      search()
    }
  }, [])

  const search = () => {
    API.search({
      keyword: $common.getUrlParam('keyword')
    }).then(res => {
      if (res.data && res.data.length) {
        setShowSearchResult(res.data)
      }
    }).catch(err => {
      Toast.fail(err.error_msg, 1);
    })
  }

  return <div className='search-wrapper'>
    <div className='search-top'>
      <span className='search-back'></span>
      <input type='text' className='search-input' value={searchValue} onChange={inputChange} onKeyDown={keypress}></input>
    </div>
    <div className='search-driver'></div>
    {
      showSearchResult.length ? <HaveSearch result={showSearchResult}></HaveSearch> : <NoSearch></NoSearch>
    }
  </div>
}
export default Search