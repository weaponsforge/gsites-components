import PropTypes from 'prop-types'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import FullBox from '@/components/common/layout/fullbox'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

function BarChart ({
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
      <Bar
        width={width ?? 300}
        height={height ?? 300}
        options={options}
        data={data}
      />
    </FullBox>
  )
}

BarChart.propTypes = {
  data: PropTypes.object,
  options: PropTypes.object,
  /** Graph width in pixels. Will occupy full screen width if ommitted */
  width: PropTypes.number,
  /** Graph height in pixels. Will occupy full screen height if ommitted */
  height: PropTypes.number
}

export default BarChart
