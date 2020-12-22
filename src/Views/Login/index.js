import React, { useState } from 'react'
import { Button, Form, Grid, Header, Icon, Segment,Message } from 'semantic-ui-react'
import  {useHistory} from 'react-router-dom'
import $ from 'jquery'
import {  BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Dashboard from '../Dashboard'

const Login =function({setValue,user}){

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState(false)
  const [userObj,setUser]=useState('')
  const history = useHistory()
  const login=function(){
    if(email=='' || password==''){
      setError(true)
      setTimeout(function() { $("#hideDiv").fadeIn('slow') })
    }
    else{
      setUser({email:email,password:password})
      user(email)
      localStorage.setItem('email',email)
      history.push('/dashboard')
    }
  }

    return(
          <div className="App-header">
          
               {error &&
                  <div id='hideDiv'>
                    <Message
                  error
                  id='error-id'
                  header='Action Forbidden'
                  content='Invalid email or password'
                  style={{width:'330px'}}
                  />
                  </div>
                }
            
           <Grid textAlign='center' style={{ height: '80vh'}} verticalAlign='middle'>
             
           <Grid.Column style={{
            backgroundColor: "white",
            border: "1px solid transparent",
            borderRadius: "2%",
            padding: "4%",
          }}>
           
           <Header as='h2' color='black' textAlign='center'>
                    LOGIN
            </Header>
                  <hr/>
            <Form >
              <Segment stacked >
                
                  
                  <Form.Input
                  fluid icon='user'
                  iconPosition='left' 
                  placeholder='E-mail address'
                  onChange={(e)=>setEmail(e.target.value)}
                  />
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    onChange={(e)=>setPassword(e.target.value)}
                  />

                  <Button color='black'
                   fluid size='small'
                   onClick={login}
                   >
                    Login
                  </Button>
                  <div style={{ marginTop:'3%' }}>
                        New to us? <a>Sign Up</a>
                        <hr />
                        <span style={{ fontWeight: "bold" }}>OR Join Via</span>
                        <Button.Group widths="2" style={{ marginTop: "3%" }}>
                                <Button color="facebook" size='mini' >
                                <Icon name="facebook" /> Facebook
                                </Button>
                                <Button
                                color="red"
                                style={{ marginLeft: "1%" }}
                                size='mini'
                                >
                                <Icon name="google" /> Google
                                </Button>
                            </Button.Group>
                    </div>
                 
              </Segment>
            </Form>
            
          </Grid.Column>
        </Grid>
        </div>
       
    )
}
export default Login