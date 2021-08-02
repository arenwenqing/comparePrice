import React from 'react'
import { List, InputItem } from 'antd-mobile';
import './index.less'

const Login = () => {
  let moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
  return <div className='mask-wrapper'>
    <div className='login-wrapper'>
      <div className='login-top-icon'></div>
      <span className='login-close-icon'></span>
      <div className='login-tile'>登录</div>
      <List className='login-list-message'>
        <InputItem
          type='money'
          placeholder='请输入手机号'
          clear
          moneyKeyboardAlign='left'
          moneyKeyboardWrapProps={moneyKeyboardWrapProps}
        >手机号</InputItem>
        <InputItem
          type='money'
          placeholder='请输入验证码'
          clear
          moneyKeyboardAlign='left'
          moneyKeyboardWrapProps={moneyKeyboardWrapProps}
        >验证码</InputItem>
        <InputItem
          type='money'
          placeholder='填写邀请码，没有可不填'
          clear
          moneyKeyboardAlign='left'
          moneyKeyboardWrapProps={moneyKeyboardWrapProps}
        >邀请码</InputItem>
      </List>
      <div className='login-submit-btn'>提交</div>
    </div>
  </div>
}
export default Login
