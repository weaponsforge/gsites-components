import Typography from '@mui/material/Typography'

import AdminDrawer from '@/features/cms/components/layout/admindrawer'
import SectionComponent from '@/features/cms/components/layout/section'

function Home () {
  return (
    <AdminDrawer>
      <SectionComponent>
        <Typography variant='h4'>
          Posts CMS Home
        </Typography>

        <Typography variant='body'>
          Welcome to the Posts CMS Home page.
        </Typography>
      </SectionComponent>
    </AdminDrawer>
  )
}

export default Home
