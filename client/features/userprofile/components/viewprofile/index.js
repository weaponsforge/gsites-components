import Typography from '@mui/material/Typography'

import AdminDrawer from '@/features/cms/components/layout/admindrawer'
import SectionComponent from '@/features/cms/components/layout/section'

function ViewProfileComponent () {
  return (
    <AdminDrawer>
      <SectionComponent>
        <Typography variant='h4'>
          User Profile
        </Typography>

        <Typography variant='body'>
          This is the User Profile page.
        </Typography>
      </SectionComponent>
    </AdminDrawer>
  )
}

export default ViewProfileComponent
