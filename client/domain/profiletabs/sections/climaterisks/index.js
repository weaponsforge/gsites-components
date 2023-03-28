import PropTypes from 'prop-types'

import Grid from '@mui/material/Grid'
import BarChart from '@/components/common/ui/charts/bar'
import Typography from '@mui/material/Typography'
import SubContentText from '@/components/common/layout/subtcontenttext'

function ClimateRisks ({ barData, textData }) {
  return (
    <Grid container sx={{ marginTop: '56px' }}>
      {/** Climate Risks  Section */}
      <Grid item xs={12}>
        <Typography variant="h4">
            Climate Change Scenarios
        </Typography>
      </Grid>

      <Grid item xs={12} sm={7}>
        <SubContentText
          {...textData}
          title='Climate Risks'
        />
      </Grid>

      <Grid item xs={12} sm={5}>
        <BarChart
          {...barData}
          width={300}
          height={300}
        />
      </Grid>
    </Grid>
  )
}

ClimateRisks.propTypes = {
  barData: PropTypes.object,
  textData: PropTypes.object
}

export default ClimateRisks
