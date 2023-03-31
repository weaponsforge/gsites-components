import DonutChart from '@/components/common/ui/charts/donut'
import donutChartData from '@/data/donut_data'

function GHEmmisionsChart () {
  return (
    <DonutChart {...donutChartData} />
  )
}

export default GHEmmisionsChart
