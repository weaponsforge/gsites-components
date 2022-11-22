import PropTypes from 'prop-types'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import FullBox from '@/components/common/layout/fullbox'
ChartJS.register(ArcElement, Tooltip, Legend)

function DonutChart (props) {
  const container = (!props.width || !props.height)
    ? { width: '100vw', height: '100vh' }
    : {}

  return (
    <FullBox sx={container}>
      <Doughnut
        data={props}
        width={props?.width || 300}
        height={props?.height || 300}
        options={{maintainAspectRatio: false}}
      />
    </FullBox>
  )
}

DonutChart.propTypes = {
  data: PropTypes.array,
  /** Graph width in pixels. Will occupy full screen width if ommitted */
  width: PropTypes.number,
  /** Graph height in pixels. Will occupy full screen height if ommitted */
  height: PropTypes.number
}

export default DonutChart
