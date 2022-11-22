import BarChart from '@/components/common/ui/charts/bar'
import { options, data } from '@/data/bar_data'

function BarChartViz () {
  return (
    <BarChart
      options={options}
      data={data}
    />
  )
}

export default BarChartViz
