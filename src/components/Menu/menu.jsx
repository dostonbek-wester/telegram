import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Inventory, Group, VolumeMute, SlowMotionVideo, Contacts, Settings, Call } from '@mui/icons-material';
import './menu.css'
import { Menu } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@mui/material';




export default function TemporaryDrawer() {
  let ME = JSON.parse(localStorage.getItem('user'))

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width:  anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
 );

return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)}>
            <Menu style={{ fontSize: '32px', color: 'grey' }} />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div className="menu-container">
              <div className="first-box">
                <img src={ME?.avatar} alt="" />
                <h4>{ME?.name}</h4>
              </div>
              <hr />
              <div className="second-box">
                <div className="one">
                  <img src="https://avatars.mds.yandex.net/i?id=3ae27c509c653e804d6a8b648bb4fd59489f29fe-10703682-images-thumbs&n=13" alt="" />
                  <h5>Boburbek</h5>
                </div>
                <div className="one">
                  <img src="https://avatars.mds.yandex.net/i?id=3ae27c509c653e804d6a8b648bb4fd59489f29fe-10703682-images-thumbs&n=13" alt="" />
                  <h5>Abdulaziz</h5>
                </div>
                <div className="one">
                  <Button LinkComponent={NavLink} to={'/'} className='add-btn' >
                    <button>+</button>Add account
                  </Button>
                </div>
              </div>
              <hr />
              <div className="third-box">
                <div className="two">
                  <Inventory style={{ color: 'white' }} />
                  <h5>Archive</h5>
                </div>
                <div className="two">
                  <Group style={{ color: 'white' }} />
                  <h5>New group</h5>
                </div>
                <div className="two">
                  <VolumeMute style={{ color: 'white' }} />
                  <h5>New channel</h5>
                </div>
                <div className="two">
                  <SlowMotionVideo style={{ color: 'white' }} />
                  <h5>My stories</h5>
                </div>
                <div className="two">
                  <Contacts style={{ color: 'white' }} />
                  <h5>Contacts</h5>
                </div>
                <div className="two">
                  <Settings style={{ color: 'white' }} />
                  <h5>Settings</h5>
                </div>
                <div className="two">
                  <Call style={{ color: 'white' }} />
                  <h5>Calls</h5>
                </div>

              </div>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
);}