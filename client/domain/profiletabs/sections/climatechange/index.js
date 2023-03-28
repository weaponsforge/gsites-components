import PropTypes from 'prop-types'

import Grid from '@mui/material/Grid'
import LineGraph from '@/components/common/ui/charts/line'
import Typography from '@mui/material/Typography'
import SubContentText from '@/components/common/layout/subtcontenttext'

function ClimateChange ({ barData, textData }) {
  return (
    <Grid container sx={{ marginTop: '56px' }}>
      {/** Climate Change and Vulnerability Section */}
      <Grid item xs={12}>
        <Typography variant="h4">
            Climate Change Scenarios
        </Typography>
      </Grid>

      <Grid item xs={12} sm={7}>
        <SubContentText
          {...textData}
          title='Climate Change and Vulnerability'
        />
      </Grid>

      <Grid item xs={12} sm={5}>
        <LineGraph
          {...barData}
          width={300}
          height={300}
        />
      </Grid>
    </Grid>
  )
}

ClimateChange.propTypes = {
  barData: PropTypes.object,
  textData: PropTypes.object
}

export default ClimateChange
