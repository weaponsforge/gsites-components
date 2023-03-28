import { useSelector } from 'react-redux'
import { ADAPTER_STATES } from '@/store/constants'

import Typography from '@mui/material/Typography'

import { SectionComponent } from '@/features/cms'
import LoadingIndicator from '@/components/common/ui/loadingindicator'
import HeaderNav from '../layout/headernav'

const orderedKeys = [
  'id',
  'title',
  'description',
  'slug',
  'country',
  'author',
  'date_created',
  'date_updated'
]

function ViewPostComponent () {
  const post = useSelector(state => state.posts.post)
  const status = useSelector(state => state.posts.status)

  return (
    <>
      <SectionComponent>
        {/** Header */}
        <HeaderNav
          title='Post'
          subTitle='View Post content.'
          buttonLink='/cms/posts'
          buttonLabel='Cancel'
          disabled={status === ADAPTER_STATES.PENDING}
        />

        {(status === ADAPTER_STATES.IDLE && post !== null) &&
        <div>
          {orderedKeys.map((key, index) => (
            <div key={index}>
              <Typography variant='label'><b>{key}:</b> </Typography>
              <Typography variant='label'>{post[key]}</Typography>
            </div>
          ))}
        </div>
        }
      </SectionComponent>

      <SectionComponent>
        {(status === ADAPTER_STATES.PENDING)
          ? <LoadingIndicator />
          : (post !== null)
            ? <div dangerouslySetInnerHTML={{ __html: post.content }} />
            : <div>Error retrieving Post. Please check the Post ID and try again.</div>
        }
      </SectionComponent>
    </>
  )
}

export default ViewPostComponent
