import Typography from '@mui/material/Typography'
import { SectionComponent } from '@/features/cms'

function ViewPostComponent () {
  return (
    <>
      <SectionComponent>
        <Typography variant='h4'>
          Post
        </Typography>

        <Typography variant='body'>
          View Post content.
        </Typography>
      </SectionComponent>
    </>
  )
}

export default ViewPostComponent
