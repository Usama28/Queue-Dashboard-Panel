import React,{useEffect,useState} from 'react'
import { Icon, Button, Image , Card ,Grid,Segment} from 'semantic-ui-react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


function Doctor() {
  const [colors,setColors]=useState(['#e0eff6','#fcf5db', '#f9edef','#fcf5db','#eeebf4','#ebf3e8','#ebf3e8'])
  const doctorList=[
        {
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR36otcu9zxyk0cTG6DHNR6JQeAM7qGPyoJ8g&usqp=CAU',
          name:'Dr. Joseph',
          type:'Cardiologist',
          color:colors[Math.floor(Math.random()*8)]
        },
        {
          image:'https://www.netclipart.com/pp/m/97-972828_doctor-png-images-doctor-image-hd-download.png',
          name:'Dr. Jessica',
          type:'Physician',
          color:colors[Math.floor(Math.random()*8)]
        },
        {
         image:'https://www.miraldental.com/wp-content/uploads/2018/12/doctor-img2.png',
          name:'Dr. Martin',
          type:'Dentist',
          color:colors[Math.floor(Math.random()*8)]
        },
        {
          image:'https://purepng.com/public/uploads/large/purepng.com-doctordoctorsdoctors-and-nursesclinicianmedical-practitionernotepadfemale-1421526857295nzsqt.png',
          name:'Dr. Katherin',
          type:'Gyanocologist',
          color:colors[Math.floor(Math.random()*8)]
        },
        {
          image:'https://www.featurepics.com/StockImage/20060916/lady-doctor-with-stethoscope-stock-photo-91364.jpg',
          name:'Dr. Sophie',
          type:'Surgeon',
          color:colors[Math.floor(Math.random()*8)]
        },
        {
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUoaNbBN6Viu_3WOETLR5HD0qabjEk3YaZOA&usqp=CAU',
          name:'Dr. Amiello',
          type:'ENT',
          color:colors[Math.floor(Math.random()*8)]
        },
        
  ]
    
    return(
      <div> 
        <Grid  columns={4}  stackable >
          {doctorList.map(({image,name,type,color},index)=>{
            return(
              <Grid.Column>
                <Card style={{backgroundColor:color ,textAlign:'center', width:'230px' , height:'40vh'}}>
                  <Card.Content >
                    <Image
                      size='tiny'
                      src={image}
                      circular
                    />
                    <Card.Header style={{marginTop:'3%'}}>{name}</Card.Header>
                    <Card.Meta>
                          <span className='date'>{type}</span>
                    </Card.Meta>
                  
                    <div style={{display:'flex', justifyContent:'center',margin:'5% 0%'}}>
                        <Icon name='facebook f' size='large'/>
                        <Icon name='twitter' size='large'/>
                        <Icon name='instagram' size='large'/>
                    </div>
                    
                    <div style={{ position:'absolute',bottom:3, margin:'2% 12%'}}>
                      <Button basic size='tiny' color='black'>
                        Book Appointment
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
              </Grid.Column>
            )
          })}  
        </Grid>    

          <BottomNavigation style={{backgroundColor:'transparent'}}>
            <BottomNavigationAction icon={
                  <Button size='tiny' color='black'>
                    Add Doctor
                  </Button>} />
          </BottomNavigation>
      </div>
    )
}
export default Doctor