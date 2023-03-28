import { WithCMSAuth } from '@/features/authentication'
import { ViewChartComponent } from '@/features/charts'

function CMSViewChart () {
  return (
    <ViewChartComponent />
  )
}

export default WithCMSAuth(CMSViewChart)
