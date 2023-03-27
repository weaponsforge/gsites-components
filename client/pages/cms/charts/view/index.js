import { WithAuth } from '@/features/authentication'
import { ChartsList } from '@/features/charts'

function CMSViewChart () {
  return (
    <ChartsList />
  )
}

export default WithAuth(CMSViewChart)
