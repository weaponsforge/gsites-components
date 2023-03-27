import Typography from '@mui/material/Typography'
import { AdminDrawer, SectionComponent } from '@/features/cms'

function ViewPostComponent () {
  return (
    <AdminDrawer>
      <SectionComponent>
        <Typography variant='h4'>
          Post
        </Typography>

        <Typography variant='body'>
          View Post content.
        </Typography>
      </SectionComponent>
    </AdminDrawer>
  )
}

export default ViewPostComponent
