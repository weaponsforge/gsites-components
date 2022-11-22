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
  width = 300,
  height = 300
}) {
  return (
    <FullBox >
      <Bar
        width={width}
        height={height}
        options={options}
        data={data}
      />
    </FullBox>
  )
}

BarChart.propTypes = {
  data: PropTypes.array,
  options: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number
}

export default BarChart
