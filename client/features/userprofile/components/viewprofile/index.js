import Typography from '@mui/material/Typography'
import { SectionComponent } from '@/features/cms'

function ViewProfileComponent () {
  return (
    <>
      <SectionComponent>
        <Typography variant='h4'>
          User Profile
        </Typography>

        <Typography variant='body'>
          This is the User Profile page.
        </Typography>
      </SectionComponent>
    </>
  )
}

export default ViewProfileComponent
