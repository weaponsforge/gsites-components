import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { ADAPTER_STATES } from '@/store/constants'

import Typography from '@mui/material/Typography'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'

import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone'
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone'

import { SectionComponent } from '@/features/cms'
import LoadingIndicator from '@/components/common/ui/loadingindicator'
import HeaderNav from '../layout/headernav'
import AlertDialog from '@/components/common/ui/alertdialog'

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

function ViewPostComponent ({
  handleControlClick,
  handleDeleteCancel,
  deletePost,
  navigateToPosts,
  deleteState,
  deleteSuccess
}) {
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
          buttonLabel='Back'
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

        {/** Modal Dialog */}
        {(deleteState.isOpenDialog) &&
          <AlertDialog
            isOpen={deleteState.isOpenDialog}
            dialogTitle='Delete Post'
            dialogText={(deleteSuccess) ? 'Post deleted.' : 'Are you sure you want to delete this Post?'}
            loading={status === ADAPTER_STATES.PENDING}
            cancelCallback={() => {
              if (deleteState.deleteSuccess) {
                navigateToPosts()
              } else {
                handleDeleteCancel()
              }
            }}
            confirmCallback={() => {
              if (deleteSuccess) {
                navigateToPosts()
              } else {
                deletePost(post?.id ?? null)
              }
            }}
          />
        }
      </SectionComponent>

      {/** Button control group */}
      <SectionComponent>
        <ButtonGroup variant='outlined' size='large'
          sx={{
            display: 'flex',
            justifyContent: 'end',
            '& svg': {
              fontSize: '30px'
            }
          }}
        >
          <Button onClick={() => handleControlClick('delete')}>
            <DeleteForeverTwoToneIcon  />
          </Button>
          <Button>
            <BorderColorTwoToneIcon onClick={() => handleControlClick('edit', post?.id ?? '')} />
          </Button>
        </ButtonGroup>

        {(status === ADAPTER_STATES.PENDING)
          ? <LoadingIndicator />
          : (post !== null)
            ? <div dangerouslySetInnerHTML={{ __html: post.content }} style={{ minHeight: '300px' }} />
            : <div style={{ height: '300px' }}>
                The Post does not exist or it may have been deleted.
            </div>
        }
      </SectionComponent>
    </>
  )
}

ViewPostComponent.propTypes = {
  handleControlClick: PropTypes.func,
  handleDeleteCancel: PropTypes.func,
  deletePost: PropTypes.func,
  navigateToPosts: PropTypes.func,
  deleteState: PropTypes.object,
  deleteSuccess: PropTypes.bool
}

export default ViewPostComponent
