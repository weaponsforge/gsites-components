import { WithCMSAuth } from '@/features/authentication'
import { ChartsList } from '@/features/charts'

function Charts () {
  return (<ChartsList />)
}

export default WithCMSAuth(Charts)
