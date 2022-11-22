import PropTypes from 'prop-types'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import FullBox from '@/components/common/layout/fullbox'
ChartJS.register(ArcElement, Tooltip, Legend)

function DonutChart (props) {
  return (
    <FullBox >
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
  width: PropTypes.number,
  height: PropTypes.number
}

export default DonutChart
