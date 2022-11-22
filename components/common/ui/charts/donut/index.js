import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import FullBox from '@/components/common/layout/fullbox'
ChartJS.register(ArcElement, Tooltip, Legend)

function DonutChart (props) {
  return (
    <FullBox >
      <Doughnut
        data={props}
        width={300}
        height={300}
        options={{maintainAspectRatio: false}}
      />
    </FullBox>
  )
}

export default DonutChart
