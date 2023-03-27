import Typography from '@mui/material/Typography'
import { AdminDrawer, SectionComponent } from '@/features/cms'

function ChartsListComponent () {
  return (
    <AdminDrawer>
      <SectionComponent>
        <Typography variant='h4'>
          Charts
        </Typography>

        <Typography variant='body'>
          This is the Charts List page.
        </Typography>
      </SectionComponent>
    </AdminDrawer>
  )
}

export default ChartsListComponent
