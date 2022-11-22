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
  data
}) {
  return (
    <FullBox >
      <Line
        width={300}
        height={300}
        options={options}
        data={data}
      />
    </FullBox>
  )
}

export default LineGraph
