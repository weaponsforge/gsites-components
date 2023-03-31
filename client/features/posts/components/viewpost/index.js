import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { ADAPTER_STATES } from '@/store/constants'

import Typography from '@mui/material/Typography'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'

import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone'
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone'
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges'
import UnpublishedTwoToneIcon from '@mui/icons-material/UnpublishedTwoTone'

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
  'status',
  'date_created',
  'date_updated'
]

function ViewPostComponent ({
  handleControlClick,
  handleDeleteCancel,
  deletePost,
  publishPost,
  navigateToPosts,
  localstate,
  actionTypes,
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
              <Typography variant='label'>{(key === 'status')
                ? (post['published'] === true)
                  ? 'published'
                  : 'draft'
                : post[key]
              }</Typography>
            </div>
          ))}
        </div>
        }

        {/** Modal Dialog */}
        {(localstate.isOpenDialog) &&
          <AlertDialog
            isOpen={localstate.isOpenDialog}
            dialogTitle={localstate.dialogTitle}
            dialogText={(deleteSuccess) ? localstate.dialogSuccess : localstate.dialogMessage}
            loading={status === ADAPTER_STATES.PENDING}
            cancelCallback={() => {
              if (localstate.deleteSuccess) {
                navigateToPosts()
              } else {
                handleDeleteCancel()
              }
            }}
            confirmCallback={() => {
              if (deleteSuccess) {
                navigateToPosts()
              } else {
                switch (localstate.action) {
                case actionTypes.DELETE:
                  deletePost(post?.id ?? null)
                  break
                case actionTypes.UNPUBLISH:
                case actionTypes.PUBLISH:
                  publishPost(post?.id ?? null, !post?.published)
                  break
                default:
                  break
                }
              }
            }}
          />
        }
      </SectionComponent>

      {/** Button control group */}
      <SectionComponent>
        {(post !== null) &&
          <ButtonGroup variant='outlined' size='large'
            sx={{
              display: 'flex',
              justifyContent: 'end',
              '& svg': {
                fontSize: '30px'
              }
            }}
          >
            <Button onClick={() => handleControlClick(actionTypes.DELETE)}>
              <DeleteForeverTwoToneIcon  />
            </Button>
            <Button onClick={() => handleControlClick(actionTypes.PUBLISH, post?.id ?? '', !post?.published )}>
              {(post?.published)
                ? <UnpublishedTwoToneIcon />
                : <PublishedWithChangesIcon />
              }
            </Button>
            <Button onClick={() => handleControlClick(actionTypes.EDIT, post?.id ?? '')}>
              <BorderColorTwoToneIcon />
            </Button>
          </ButtonGroup>
        }

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
  publishPost: PropTypes.func,
  navigateToPosts: PropTypes.func,
  localstate: PropTypes.object,
  actionTypes: PropTypes.object,
  deleteSuccess: PropTypes.bool
}

export default ViewPostComponent
