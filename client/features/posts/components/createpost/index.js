import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'

import { ADAPTER_STATES } from '@/store/constants'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import { SectionComponent } from '@/features/cms'
import HeaderNav from '../layout/headernav'
const WYSWIGEditor = dynamic(() => import('@/components/common/ui/wysiwygeditor'), { ssr: false })
import MetadataForm from '../layout/metadataform'
import AlertDialog from '@/components/common/ui/alertdialog'
import LoadingIndicator from '@/components/common/ui/loadingindicator'

function CreatePostComponent ({
  handleNewContent,
  handleSubmit,
  savePost,
  toggleDialog,
  saveState,
  post,
  mode = 'create',
  dialogSettings
}) {
  const status = useSelector(state => state.posts.status)
  const router = useRouter()

  return (
    <form onSubmit={handleSubmit}>
      <SectionComponent>
        {/** Header */}
        <HeaderNav
          title={dialogSettings.headerTitle}
          subTitle={dialogSettings.headerSubTitle}
          buttonLink='/cms/posts'
          buttonLabel='Cancel'
          disabled={status === ADAPTER_STATES.PENDING}
        />

        {(mode === 'edit' && post?.id === undefined)
          ? <LoadingIndicator />
          : <>
            <MetadataForm
              disabled={status === ADAPTER_STATES.PENDING}
              post={{ ...post, content: '' }}
              mode={mode}
            />

            {/** HTML Editor */}
            <WYSWIGEditor
              setContentCallback={(newContent) => handleNewContent(newContent)}
              readonly={status === ADAPTER_STATES.PENDING}
              initialContent={(post?.id)
                ? post.content
                : null
              }
            />

            {/** Lower Button Control */}
            <Box sx={{
              marginTop: (theme) => theme.spacing(3)
            }}>
              <Button
                disableElevation
                variant='contained'
                size='large'
                type='submit'
                disabled={status === ADAPTER_STATES.PENDING}
              >
                  Save
              </Button>
            </Box>
          </>
        }
      </SectionComponent>

      {(saveState.isOpenDialog) &&
        <AlertDialog
          isOpen={saveState.isOpenDialog}
          loading={status === ADAPTER_STATES.PENDING}
          dialogTitle={dialogSettings.dialogTitle}
          dialogText={(!saveState.saveSuccess)
            ? dialogSettings.dialogText
            : dialogSettings.dialogTextSuccess
          }
          cancelCallback={() => {
            if (saveState.saveSuccess) {
              router.push('/cms/posts')
            } else {
              toggleDialog()
            }
          }}
          confirmCallback={() => {
            if (saveState.saveSuccess) {
              router.push('/cms/posts')
            } else {
              savePost(post?.id ?? null)
            }
          }}
        />
      }
    </form>
  )
}

CreatePostComponent.propTypes = {
  handleNewContent: PropTypes.func,
  handleSubmit: PropTypes.func,
  savePost: PropTypes.func,
  toggleDialog: PropTypes.func,
  saveState: PropTypes.object,
  post: PropTypes.object,
  mode: PropTypes.string,
  dialogSettings: PropTypes.object
}

export default CreatePostComponent
