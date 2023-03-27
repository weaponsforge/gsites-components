import { WithAuth } from '@/features/authentication'
import { ChartsList } from '@/features/charts'

function Charts () {
  return (<ChartsList />)
}

export default WithAuth(Charts)
