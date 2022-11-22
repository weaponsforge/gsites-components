import ProfileComponent from '@/components/profile'
import textData from '@/data/text_data'
import donutChartData from '@/data/donut_data'
import { options, labels, data } from '@/data/bar_data'

function Profile () {
  return (
    <ProfileComponent
      textData={textData}
      donutData={donutChartData}
      barData={{ options, labels, data }}
    />
  )
}

export default Profile
