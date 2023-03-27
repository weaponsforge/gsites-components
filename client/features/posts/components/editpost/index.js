import Typography from '@mui/material/Typography'
import { SectionComponent } from '@/features/cms'

function EditPostComponent () {
  return (
    <>
      <SectionComponent>
        <Typography variant='h4'>
          Edit Post
        </Typography>

        <Typography variant='body'>
          Edit a Post here.
        </Typography>
      </SectionComponent>
    </>
  )
}

export default EditPostComponent
