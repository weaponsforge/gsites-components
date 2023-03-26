import LineGraph from '@/components/common/ui/charts/line'
import { options, data } from '@/data/bar_data'

function LineChartViz () {
  return (
    <LineGraph
      options={options}
      data={data}
    />
  )
}

export default LineChartViz
