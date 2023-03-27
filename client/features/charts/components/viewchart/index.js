import Typography from '@mui/material/Typography'

import AdminDrawer from '@/features/cms/components/layout/admindrawer'
import SectionComponent from '@/features/cms/components/layout/section'

function ViewChartComponent () {
  return (
    <AdminDrawer>
      <SectionComponent>
        <Typography variant='h4'>
          Chart Visualization
        </Typography>

        <Typography variant='body'>
          This is the Chart Visualization page.
        </Typography>
      </SectionComponent>
    </AdminDrawer>
  )
}

export default ViewChartComponent
