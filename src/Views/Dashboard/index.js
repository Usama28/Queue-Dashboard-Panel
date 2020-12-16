import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {
        AppBar , List ,ListItem , ListItemIcon , ListItemText , Hidden,BottomNavigationAction,Typography,
        makeStyles, useTheme,Toolbar ,Divider ,Drawer ,CssBaseline ,IconButton ,BottomNavigation,Button
      } 
from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { Icon } from 'semantic-ui-react'
import { useHistory } from "react-router-dom";
import Doctors from "../Doctors"
import Schedule from "../DoctorSchedule"
import Patients from "../Patients"
import Appointments from "../Appointment"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Dashboard(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [patients, setPatients] = useState(false);
  const [doctors, setDoctors] = useState(false);
  const [appointment, setAppointments] = useState(false);
  const [schedule, setSchedule] = useState(false);
  const [value, setValue] = useState(0);
  const history=useHistory()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
 const getPatients=function(){
    setPatients(true)
    history.push('/Patients')
  }
  const getDoctors=function(){
    setDoctors(true)
    history.push('/Doctors')
  }
  const getAppointment=function(){
    setAppointments(true)
    history.push('/Appointments')
  }
  const getSchedule=function(){
    setSchedule(true)
    history.push('/DoctorsSchedule')
  }
  const drawer = (
    <div>
       <div style={{display:'flex',justifyContent:'space-around',margin: '10% 15%',}}>
          <AccountCircleOutlinedIcon fontSize='medium'/>
          <p>{localStorage.getItem('email')}</p>
        </div>
        <Divider />       
     
      <List>
          <ListItem button onClick={getPatients}>
              <ListItemIcon> 
                    <Icon name='wheelchair'  size='large' />
              </ListItemIcon>
              <ListItemText primary='Patients' />
          </ListItem>
          <ListItem button onClick={getDoctors}>
            <ListItemIcon> 
                  <Icon name='doctor'  size='large' />
            </ListItemIcon>
            <ListItemText primary='Doctors' />
          </ListItem>
          <ListItem button onClick={getAppointment}>
            <ListItemIcon> 
            <Icon name='calendar alternate outline'  size='large'/> 
            </ListItemIcon>
            <ListItemText primary='Appointments' />
        </ListItem>
        <ListItem button onClick={getSchedule}>
          <ListItemIcon> 
                <Icon name='calendar check outline'  size='large' />
          </ListItemIcon>
          <ListItemText primary='Doctor Schedule' />
        </ListItem>
           
     
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
          <div style={{position:'absolute',bottom:0}}>
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            className={classes.root}
          >
            <BottomNavigationAction label={localStorage.getItem('email')} style={{fontWeight:'bold',color:'black', marginLeft:'5%'}}/>
            <BottomNavigationAction  label={<Button
                 variant="outlined" 
                 size="small"
                 onClick={()=>history.push('/')}
                 >
                   Logout
                   </Button>} />
          </BottomNavigation>
          </div>

     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

   

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
            {patients && <Patients/>}
            {doctors && <Doctors/>}
            {appointment && <Appointments/>}
            {schedule && <Schedule/>}
      </main>
    </div>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
