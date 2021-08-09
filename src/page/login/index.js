import React, { useState, memo, forwardRef, useImperativeHandle } from 'react'
import { List, InputItem, Toast } from 'antd-mobile';
import API from './apis'
import './index.less'

let index = 60
let clearTime = false
let reg = /^[1][3,4,5,7,8][0-9]{9}$/
let purpose
const Login = (props, ref) => {
  const [num, setNum] = useState(0)
  const [flag, setFlag] = useState(false)
  const [showInvitation, setShowInvitation] = useState(false)
  const [ifShowLogin, setIfShowLogin] = useState(false)
  const [iphoneValue, setIphoneValue] = useState(undefined)
  const [smsCode, setSmsCode] = useState(undefined)
  const [invitationCode, setInvitationCode] = useState(undefined)

  useImperativeHandle(ref, () => ({
    show: () => {
      setIfShowLogin(true)
    }
  }))

  function simulateInterval (callback, interval) {
    let timeId
    function fn() {
      callback()
      const preTimeId = timeId
      timeId = setTimeout(fn, interval)
      if (clearTime) {
        clearTimeout(timeId)
      }
      clearTimeout(preTimeId)
    }
    return setTimeout(fn, interval)
  }

  const checkPhone = () => {
    return API.checkPhone({
      phone: iphoneValue
    }).catch(err => {
      Toast.fail(err.error_msg, 1)
    })
  }

  const sendYanzheng = async () => {
    if (!reg.test(iphoneValue)) {
      Toast.fail('手机号不合法', 1)
      return
    }
    if (flag) {
      return
    }
    const data = await checkPhone()
    purpose = data.is_reg === 0 ? 1 : 2
    setShowInvitation(data.is_reg === 0)
    getCode()
    setFlag(true)
    setNum(index)
    clearTime = false
    simulateInterval(() => {
      if (index) {
        index -= 1
        setNum(index)
      } else {
        clearTime = true
        setFlag(false)
        index = 60
      }
    }, 1000)
  }

  const iphoneChange = (e) => {
    setIphoneValue(e)
  }

  const getCode = () => {
    API.getCode({
      phone: iphoneValue,
      purpose: purpose
    }).then(res => {
      console.log(res)
    }).catch(err => {
      Toast.fail(err.error_msg, 1)
    })
  }

  const closeLogin = () => {
    setIfShowLogin(false)
  }

  const submitFun = () => {
    API.login({
      phone: iphoneValue,
      sms_code: smsCode * 1,
      ...(invitationCode ? { invite_code: invitationCode } : {})
    }).then(res => {
      window.localStorage.setItem('tokenKey', `${res.token_type} ${res.access_token}`)
      Toast.success('登录成功', 1)
      setIfShowLogin(false)
      window.location.reload()
    }).catch(err => {
      Toast.fail(err.error_msg, 1)
    })
  }

  const smsCodeChange = (e) => {
    setSmsCode(e)
  }

  const invitationCodeChange = (e) => {
    setInvitationCode(e)
  }

  return <div className={ ifShowLogin ? 'mask-wrapper' : 'mask-wrapper hide'}>
    <div className='login-wrapper'>
      <div className='login-top-icon'></div>
      <span className='login-close-icon' onClick={closeLogin}></span>
      <div className='login-tile'>登录</div>
      <List className='login-list-message'>
        <InputItem
          type='money'
          placeholder='请输入手机号'
          value={iphoneValue}
          onChange={iphoneChange}
          clear
          moneyKeyboardAlign='left'
        >手机号</InputItem>
        <div className='login-yanzheng-wrapper'>
          <InputItem
            type='money'
            placeholder='请输入验证码'
            value={smsCode}
            onChange={smsCodeChange}
            moneyKeyboardAlign='left'
          >验证码</InputItem>
          <span className='login-yanzheng-send' onClick={sendYanzheng}>{!flag ? '发送' : `${num}s`}</span>
        </div>
        {
          showInvitation ? <InputItem
            type='money'
            placeholder='填写邀请码，没有可不填'
            value={invitationCode}
            onChange={invitationCodeChange}
            clear
            moneyKeyboardAlign='left'
          >邀请码</InputItem> : ''
        }
      </List>
      <div className='login-submit-btn' onClick={submitFun}>提交</div>
    </div>
  </div>
}
export default memo(forwardRef(Login))
