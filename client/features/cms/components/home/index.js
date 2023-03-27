import Typography from '@mui/material/Typography'
import { SectionComponent } from '@/features/cms'

function Home () {
  return (
    <>
      <SectionComponent>
        <Typography variant='h4'>
          Posts CMS Home
        </Typography>

        <Typography variant='body'>
          Welcome to the Posts CMS Home page.
        </Typography>
      </SectionComponent>
    </>
  )
}

export default Home
