import PropTypes from 'prop-types'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
import FullBox from '@/components/common/layout/fullbox'

function LineGraph ({
  options,
  data,
  width,
  height
}) {
  const container = (!width || !height)
    ? { width: '100vw', height: '100vh' }
    : {}

  return (
    <FullBox sx={container}>
      <Line
        options={options}
        data={data}
        width={width ?? 300}
        height={height ?? 300}
      />
    </FullBox>
  )
}

LineGraph.propTypes = {
  data: PropTypes.object,
  options: PropTypes.object,
  /** Graph width in pixels. Will occupy full screen width if ommitted */
  width: PropTypes.number,
  /** Graph height in pixels. Will occupy full screen height if ommitted */
  height: PropTypes.number
}

export default LineGraph
