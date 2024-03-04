import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import IosShareSharpIcon from '@mui/icons-material/IosShareSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import { deepOrange } from '@mui/material/colors';
import MenuLink from '../../../../Shared/MenuLink';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
import "./index.css";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

function MiniDrawer({ children }) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [openSubmenu, setOpenSubmenu] = useState({});

    const handleSubmenuToggle = (index) => {
        if (open) {
            setOpenSubmenu({ ...openSubmenu, [index]: !openSubmenu[index] });
        }
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar sx={{ background: '#fff' }} position="fixed" open={open}>
                <Toolbar className='fix-height'>
                    <IconButton
                        color="#333"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className='header-wrapper'>
                        <div className="navbar-left">
                            <ul className="nav">
                                <li className="user-menu">
                                    <a className='link-header none-border-left' href="">
                                        <Avatar sx={{ bgcolor: deepOrange[500], width: 22, height: 22 }}>C</Avatar>
                                        <span class="title">Welcome SuperAdmin</span>
                                    </a>
                                </li>
                                <li>
                                    <a className='link-header' href="">
                                        <IosShareSharpIcon sx={{ width: 17, height: 17, marginBottom: '2px' }} />
                                        <span className='title'>Store front</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar-right">
                            <ul className="nav">
                                <li style={{ position: 'relative' }}>
                                    <a className='link-header' href="">
                                        <EmailIcon sx={{ width: 17, height: 17 }} />
                                        <span className='title note'>1</span>
                                    </a>
                                </li>
                                <li>
                                    <a className='link-header' href="">
                                        <NotificationsActiveIcon sx={{ width: 17, height: 17 }} />
                                    </a>
                                </li>
                                <li>
                                    <a className='link-header' href="">
                                        <AccountCircleIcon sx={{ width: 17, height: 17 }} />
                                        <span className='title'>Account</span>
                                    </a>
                                </li>
                                <li>
                                    <a className='link-header' href="">
                                        <LogoutIcon sx={{ width: 17, height: 17 }} />
                                        <span className='title'>LogOut</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <List>
                    {MenuLink.map((item, index) => (
                        <div key={index}>
                            <ListItem disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                    onClick={() => handleSubmenuToggle(index)}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <i className={`fa ${item.icon}`}></i>
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
                                    {item.subs && open && (
                                        <>
                                            {openSubmenu[index] ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                                        </>
                                    )}
                                </ListItemButton>
                            </ListItem>
                            {item.subs && openSubmenu[index] && (
                                <List component="div" disablePadding>
                                    {item.subs.map((subItem, subIndex) => (
                                        <ListItem
                                            key={subIndex}
                                            disablePadding
                                            sx={{ display: 'block', pl: 4 }}
                                            component={Link}
                                            to={subItem.route}
                                        >
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <i className={`fa ${subItem.icon}`}></i>
                                                </ListItemIcon>
                                                <ListItemText primary={subItem.name} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            )}
                        </div>
                    ))}
                </List>
                <Divider />
            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {children}
            </Box>
        </Box>
    );
};

export default MiniDrawer;