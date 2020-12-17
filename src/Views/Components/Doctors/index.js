import React,{useEffect,useState} from 'react'
import { Icon, Button, Image , Card } from 'semantic-ui-react'

function Doctor() {
  const [colors,setColors]=useState(['#e0eff6','#fcf5db', '#f9edef','#fcf5db','#eeebf4','#ebf3e8','#ebf3e8'])
  const doctorList=[
        {
          image:'',
          name:'Dr. Joseph',
          type:'Cardiologist',
          color:colors[Math.floor(Math.random()*7)]
        },
        {
          image:'',
          name:'Dr. Joseph',
          type:'Cardiologist',
          color:colors[Math.floor(Math.random()*7)]
        },
        {
          image:'',
          name:'Dr. Joseph',
          type:'Cardiologist',
          color:colors[Math.floor(Math.random()*7)]
        },
        {
          image:'',
          name:'Dr. Joseph',
          type:'Cardiologist',
          color:colors[Math.floor(Math.random()*7)]
        },
        {
          image:'',
          name:'Dr. Joseph',
          type:'Cardiologist',
          color:colors[Math.floor(Math.random()*7)]
        }
  ]
    
    return(
        <div>
        
      <Card style={{backgroundColor:'#e0eff6',textAlign:'center', width:'230px' , height:'40vh'}}>
        <Card.Content >
          <Image
          size='tiny'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR36otcu9zxyk0cTG6DHNR6JQeAM7qGPyoJ8g&usqp=CAU'
            circular
          />
          <Card.Header style={{marginTop:'3%'}}>Dr. Joseph</Card.Header>
          <Card.Meta>
                <span className='date'>Cardiologist</span>
          </Card.Meta>
        
          <div style={{display:'flex', justifyContent:'center',margin:'5% 0%'}}>
              <Icon name='facebook f' size='large'/>
              <Icon name='twitter' size='large'/>
              <Icon name='instagram' size='large'/>
          </div>
          
          <div style={{display:'flex',justifyContent:'center', margin:'4% 0%'}}>
            <Button basic size='tiny' color='black'>
              Book Appointment
            </Button>
          </div>
        </Card.Content>
      </Card>
          
        </div>
    )
}
export default Doctor