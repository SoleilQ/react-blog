import React, { useState } from 'react';
import { Card, Input, Icon, Button, Spin } from 'antd';
import '../static/login.css';

function Login(){
  const [ userName, setUserName ] = useState('')
  const [ password, setPassword] = useState('')
  const [ isLoading, setIsLoading ] = useState(false)

  const checkLogin = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }

  return (
      <div className="login-div">
          <Spin tip="loading..." spinning={isLoading}>
            <Card title="SoleiQ Blog Syteam" bordered={true} style={{width: 400}}>
              <Input
                id="userName"
                size="large"
                placeholder="Enter your userName"
                prefix={<Icon type="user" style={{color:'rgba(0,0,0,.25)'}} />}
                onChange={(e) => {setUserName(e.target.value)}}>
              </Input>
              <Input.Password
                  id="password"
                  size="large"
                  placeholder="Enter your password"
                  prefix={<Icon type="key" style={{color:'rgba(0,0,0,.25)'}} />}
                  onChange={(e)=>{setPassword(e.target.value)}}
              ></Input.Password>
              <Button type="primary" size="large" block onClick={checkLogin} > Login in </Button>
            </Card>
          </Spin>
      </div>
  )
}
export default Login;