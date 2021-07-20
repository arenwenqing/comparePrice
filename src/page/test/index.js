import React from 'react'
import './index.less'
import API from './apis'
import { Button } from 'antd-mobile'

const Test = () => {
  const getUser = () => {
    API.getUserInfo().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
  getUser()
  return <div className='wrapper-test'>
    <Button type="warning">任文庆真帅</Button>
  </div>
}
export default Test
