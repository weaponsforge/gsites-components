import Typography from '@mui/material/Typography'
import { AdminDrawer, SectionComponent } from '@/features/cms'

function EditPostComponent () {
  return (
    <AdminDrawer>
      <SectionComponent>
        <Typography variant='h4'>
          Edit Post
        </Typography>

        <Typography variant='body'>
          Edit a Post here.
        </Typography>
      </SectionComponent>
    </AdminDrawer>
  )
}

export default EditPostComponent
