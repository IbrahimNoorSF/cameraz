import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import PaymentIcon from '@mui/icons-material/Payment';
import RateReviewIcon from '@mui/icons-material/RateReview';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import {
    Switch,
    Route,
    useHistory,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import AddProducts from './AddProducts/AddProducts';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import { createTheme } from '@mui/material/styles';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import ManageProducts from './ManageProducts/ManageProducts';
import useAuth from '../../hooks/useAuth';
import ManageMyOrders from './ManageMyOrders/ManageMyOrders';
import Payment from './Payment/Payment';
import DashboardHome from './DashboardHome/DashboardHome';
import AddReview from './AddReview/AddReview';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000',
        },
        secondary: {
            main: '#000',
        },
    },
});

const drawerWidth = 240;

function Dashboard(props) {
    const { admin, logOut } = useAuth();
    const history = useHistory();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            {
                admin ? <List>
                    <ListItem button onClick={() => history.push('/')}>
                        <ListItemIcon>
                            <HomeRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Back To Home"} />
                    </ListItem>
                    <NavLink className="text-decoration-none text-muted" to={`${url}`}>
                        <ListItem button>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Dashboard"} />
                        </ListItem>
                    </NavLink>
                    <NavLink className="text-decoration-none text-muted" to={`${url}/add-products`}>
                        <ListItem button>
                            <ListItemIcon>
                                <PostAddRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Add Products"} />
                        </ListItem>
                    </NavLink>
                    <NavLink className="text-decoration-none text-muted" to={`${url}/make-admin`}>
                        <ListItem button>
                            <ListItemIcon>
                                <SupervisorAccountRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Make Admin"} />
                        </ListItem>
                    </NavLink>
                    <NavLink className="text-decoration-none text-muted" to={`${url}/manage-orders`}>
                        <ListItem button>
                            <ListItemIcon>
                                <LocalMallRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Manage All Orders"} />
                        </ListItem>
                    </NavLink>
                    <NavLink className="text-decoration-none text-muted" to={`${url}/manage-products`}>
                        <ListItem button>
                            <ListItemIcon>
                                <ShoppingCartRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Manage Products"} />
                        </ListItem>
                    </NavLink>
                    <ListItem button onClick={logOut}>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Logout"} />
                    </ListItem>
                </List> : <List>
                    <ListItem button onClick={() => history.push('/')}>
                        <ListItemIcon>
                            <HomeRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Back To Home"} />
                    </ListItem>
                    <NavLink className="text-decoration-none text-muted" to={`${url}`}>
                        <ListItem button>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Dashboard"} />
                        </ListItem>
                    </NavLink>
                    <NavLink className="text-decoration-none text-muted" to={`${url}/payment`}>
                        <ListItem button>
                            <ListItemIcon>
                                <PaymentIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Payment"} />
                        </ListItem>
                    </NavLink>
                    <NavLink className="text-decoration-none text-muted" to={`${url}/my-orders`}>
                        <ListItem button>
                            <ListItemIcon>
                                <ShoppingCartRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary={"My Orders"} />
                        </ListItem>
                    </NavLink>
                    <NavLink className="text-decoration-none text-muted" to={`${url}/review`}>
                        <ListItem button>
                            <ListItemIcon>
                                <RateReviewIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Write Review"} />
                        </ListItem>
                    </NavLink>
                    <ListItem button onClick={logOut}>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Logout"} />
                    </ListItem>
                </List>
            }
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    bgcolor: `${theme.palette.primary.main}`,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` }
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route path={`${path}/add-products`}>
                        <AddProducts></AddProducts>
                    </Route>
                    <Route path={`${path}/make-admin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/manage-products`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                    <Route path={`${path}/manage-orders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/my-orders`}>
                        <ManageMyOrders></ManageMyOrders>
                    </Route>
                    <Route path={`${path}/review`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route exact path={`${path}`}>
                        <DashboardHome></DashboardHome>
                    </Route>
                </Switch>
            </Box>
        </Box >
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