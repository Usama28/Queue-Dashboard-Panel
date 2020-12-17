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
import Login from "../Login"
import Doctors from "../Components/Doctors"
import Schedule from "../Components/DoctorSchedule"
import Patients from "../Components/Patients"
import Appointments from "../Components/Appointment"
import {
  //  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Router from '../../Config/router'

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
  const [value, setValue] = useState(0);
  const sideMenu=[
    {
      name:'Dashboard',
      link:'/dashboard',
      icon:<Icon name='home'  size='large' />
    },
    {
      name:'Patients',
      link:'/patients',
      icon:<Icon name='wheelchair'  size='large' />
    },
    {
      name:'Doctors',
      link:'/doctors',
      icon:<Icon name='doctor'  size='large' />
    },
    {
      name:'Appointments',
      link:'/appointments',
      icon:<Icon name='calendar alternate outline'  size='large'/> 
    },
    {
      name:'Doctor Schedule',
      link:'/schedule',
      icon:<Icon name='calendar check outline'  size='large' />
    }
  ]
  const history=useHistory()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
 
  const [loginShow,setLogin]=useState(false) 
  const drawer = (
    <div>
        <div style={{display:'flex',justifyContent:'space-around',margin: '5% 25%',}}>
          <Icon name='stethoscope' size='huge' color='green' style={{marginTop:'5%'}}/>
         <span style={{fontFamily:'Lato' ,fontWeight:'bolder' , fontSize:'15px'}}> The<br/> Medi<br/> Queue </span>
        </div>
        <Divider />        
        <List>
        {sideMenu.map((item,index)=>{
          return(
              <ListItem button onClick={()=>history.push(item.link)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
          )})}
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
                 onClick={()=>setLogin(true)}
                 >
                   Logout
                   </Button>} />
          </BottomNavigation>
          </div>

     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  
    // const loginFunction=function(){
    //   setLogin(true)
    // }
  return (
    <>
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
            <Switch>
                    <Route path="/patients" component={Patients} />
                    <Route path="/doctors" component={Doctors} />
                    <Route path="/appointments" component={Appointments} />
                    <Route path="/schedule" component={Schedule} />
            </Switch>

        </main>
    </div>
    </>
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
