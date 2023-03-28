import PropTypes from 'prop-types'

import Grid from '@mui/material/Grid'
import DonutChart from '@/components/common/ui/charts/donut'
import SubContentText from '@/components/common/layout/subtcontenttext'

function GHGEmmissions ({ donutData, textData }) {
  return (
    <Grid container sx={{ marginTop: '56px' }}>
      {/** Greehouse Gas (GHG) Emmissions Section */}
      <Grid item xs={12} sm={5}>
        <DonutChart
          {...donutData}
          width={300}
          height={300}
        />
      </Grid>

      <Grid item xs={12} sm={7}>
        <SubContentText {...textData} />
      </Grid>
    </Grid>
  )
}

GHGEmmissions.propTypes = {
  donutData: PropTypes.object,
  textData: PropTypes.object
}

export default GHGEmmissions
