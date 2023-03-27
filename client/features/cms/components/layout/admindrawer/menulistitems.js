import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone'
import ListAltTwoToneIcon from '@mui/icons-material/ListAltTwoTone'
import PieChartTwoToneIcon from '@mui/icons-material/PieChartTwoTone'
import FaceIcon from '@mui/icons-material/Face'
import LanguageIcon from '@mui/icons-material/Language'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'

const mainListItems = [
  {
    icon: <HomeTwoToneIcon />,
    name: 'Home',
    url: '/cms'
  },
  {
    icon: <ListAltTwoToneIcon />,
    name: 'Posts',
    url: '/cms/posts'
  },
  {
    icon: <PieChartTwoToneIcon />,
    name: 'Charts',
    url: '/cms/charts'
  }
]

const secondaryListItems = [
  {
    icon: <FaceIcon />,
    name: 'Profile',
    url: '/cms/profile'
  },
  {
    icon: <LanguageIcon />,
    name: 'Website',
    url: '/'
  },
  {
    icon: <ExitToAppIcon />,
    name: 'Logout',
    url: '#'
  }
]

export {
  mainListItems,
  secondaryListItems
}
