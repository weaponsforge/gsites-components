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
  width = 300,
  height = 300
}) {
  return (
    <FullBox >
      <Line
        width={width}
        height={height}
        options={options}
        data={data}
      />
    </FullBox>
  )
}

LineGraph.propTypes = {
  data: PropTypes.array,
  options: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number
}

export default LineGraph
