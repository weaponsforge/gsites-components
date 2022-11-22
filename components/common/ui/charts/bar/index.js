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
  data
}) {
  return (
    <FullBox >
      <Bar
        width={300}
        height={300}
        options={options}
        data={data}
      />
    </FullBox>
  )
}

export default BarChart
