import React, { useState } from 'react'
import { Button, Form, Grid, Header, Icon, Segment,Card } from 'semantic-ui-react'
import  {useHistory} from 'react-router-dom'

const Login =function(){

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const history = useHistory()
  const [userObj,setUser]=useState('')
  const login=function(){
    setUser({email:email,password:password})
    history.push('/Dashboard')
  }

    return(
          <div className="App-header">
           <Grid textAlign='center' style={{ height: '100vh'}} verticalAlign='middle'>
             
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