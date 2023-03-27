import { useSelector } from 'react-redux'
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import { SectionComponent } from '@/features/cms'
import HeaderNav from '../layout/headernav'
const WYSWIGEditor = dynamic(() => import('@/components/common/ui/wysiwygeditor'), { ssr: false })
import MetadataForm from '../layout/metadataform'

import { ADAPTER_STATES } from '@/store/constants'

function CreatePostComponent ({
  handleNewContent,
  handleSubmit
 }) {
  const status = useSelector(state => state.posts.status)

  return (
    <form onSubmit={handleSubmit}>
      <SectionComponent>
        {/** Header */}
        <HeaderNav
          title='Create Post'
          subTitle='Create a new Post here.'
          buttonLink='/cms/posts'
          buttonLabel='Cancel'
          disabled={status === ADAPTER_STATES.PENDING}
        />

        <MetadataForm
          disabled={status === ADAPTER_STATES.PENDING}
        />

        {/** HTML Editor */}
        <WYSWIGEditor
          setContentCallback={(newContent) => handleNewContent(newContent)}
          readonly={status === ADAPTER_STATES.PENDING}
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
      </SectionComponent>
    </form>
  )
}

CreatePostComponent.propTypes = {
  handleNewContent: PropTypes.func,
  handleSubmit: PropTypes.func
}

export default CreatePostComponent
