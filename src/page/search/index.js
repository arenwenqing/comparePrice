import React from 'react'
import NoSearch from './components/noSearch'
import HaveSearch from '../components/list'
import './index.less'

const Search = () => {
  return <div className='search-wrapper'>
    <div className='search-top'>
      <span className='search-back'></span>
      <input type='text' className='search-input'></input>
    </div>
    <div className='search-driver'></div>
    {/* <NoSearch></NoSearch> */}
    <HaveSearch></HaveSearch>
  </div>
}
export default Search