import { useState } from 'react'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'
import useMediaQuery from '@mui/material/useMediaQuery'
import Link from 'next/link'

// MUI Components
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

// Icons
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

// Data
import { mainListItems, secondaryListItems } from './menulistitems'
import { useAuth } from '@/features/authentication'
import SmartNotification from '@/components/common/ui/smartnotification'

const drawerWidth = 240

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://weaponsforge.github.io/climate-profile-full/">
        climate-profile-full
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

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
}))

const DrawerDesktop = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
)

function AdminDrawer(props) {
  const isMobile = useMediaQuery('(max-width:600px)')
  const [mobileOpen, setMobileOpen] = useState(!isMobile ?? false)
  const { authUser, authSignOut } = useAuth()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawerItems = (
    <>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={handleDrawerToggle}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav" sx={{
        a: {
          color: 'gray',
          textDecoration: 'none'
        },
        'a:visited': {
          color: 'gray'
        },
        'a:hover': {
          color: (theme) => theme.palette.tertiary.main
        },
        'svg': {
          color: (theme) => theme.palette.primary.main
        }
      }}>
        {mainListItems.map((item, index) => (
          <Link href={item.url} key={index}>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </Link>
        ))}

        <Divider sx={{ my: 1 }} />

        {secondaryListItems.map((item, index) => {
          return (item.name === 'Logout')
            ? <ListItemButton onClick={authSignOut} key={index}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
            : <Link href={item.url} key={index}>
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
        })}
      </List>
    </>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="absolute"
        sx={{
          width: (isMobile)
            ? '100%'
            : (mobileOpen) ? `calc(100% - ${drawerWidth}px)` : '100%'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: (isMobile)
                ? 'block'
                : (mobileOpen)
                  ? 'none'
                  : 'block'
            }}>
            <MenuIcon />
          </IconButton>

          <Typography component="h1" variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}>
            Posts CMS
          </Typography>

          {(!isMobile) &&
          <div>
            Welcome, {authUser?.email ?? 'user'}!
          </div>
          }
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{  flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* Mobile sidebar Drawer */}
        <Drawer
          id="drawermobile"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: (isMobile) ? 'block' : 'none',
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawerItems}
        </Drawer>

        {/* Desktop sidebar Drawer */}
        <DrawerDesktop
          variant="permanent"
          id="drawerdesktop"
          sx={{
            display: (isMobile) ? 'none' : 'block',
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: (mobileOpen) ? drawerWidth : '56px',
            },
          }}
          open={mobileOpen}
        >
          {drawerItems}
        </DrawerDesktop>
      </Box>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />

        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {/* Drawer content */}
            <Grid item xs={12} lg={12}>
              {props.children}
            </Grid>
          </Grid>
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </Box>

      {/** Global Notification */}
      <SmartNotification />
    </Box>
  )
}

AdminDrawer.propTypes = {
  children: PropTypes.node
}

export default AdminDrawer
