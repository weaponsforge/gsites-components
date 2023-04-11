import { WithCMSAuth } from '@/features/authentication'
import { FileCardsList } from '@/features/filecards'

function FileCards () {
  return (<FileCardsList />)
}

export default WithCMSAuth(FileCards)
