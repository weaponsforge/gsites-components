import Typography from '@mui/material/Typography'
import { AdminDrawer, SectionComponent } from '@/features/cms'

function PostsComponent () {
  return (
    <AdminDrawer>
      <SectionComponent>
        <Typography variant='h4'>
          Posts
        </Typography>

        <Typography variant='body'>
          This is the Posts List page.
        </Typography>
      </SectionComponent>
    </AdminDrawer>
  )
}

export default PostsComponent
