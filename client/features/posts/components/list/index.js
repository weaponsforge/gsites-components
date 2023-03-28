import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarContainer
} from '@mui/x-data-grid'

import HeaderNav from '../layout/headernav'
import AlertDialog from '@/components/common/ui/alertdialog'
import { SectionComponent } from '@/features/cms'
import { ADAPTER_STATES } from '@/store/constants'

function CustomToolbar(props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <GridToolbarContainer {...props}>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
      </GridToolbarContainer>
    </div>
  )
}

function PostsComponent ({ handleDeleteCancel, handleDeleteConfirm, deleteState, deleteSuccess, columns }) {
  const {ids, entities: posts} = useSelector(state => state.posts)
  const status = useSelector(state => state.posts.status)

  return (
    <>
      <SectionComponent>
        <HeaderNav
          title='Posts'
          subTitle='This is the Posts List page.'
          buttonLink='/cms/posts/create'
          buttonLabel='Create Post'
        />

        <div style={{ height: 690, width: '100%', textAlign: 'left' }}>
          <DataGrid
            columns={columns}
            rows={ids.map((id) => (posts[id]))}
            loading={status === ADAPTER_STATES.PENDING}
            components={{ Toolbar: CustomToolbar }}
            maxColumns={4}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 10 }
              }
            }}
            pageSizeOptions={[10, 20, 50]}
          />
        </div>

        {/** Modal Dialog */}
        {(deleteState.isOpenDialog) &&
          <AlertDialog
            isOpen={deleteState.isOpenDialog}
            dialogTitle='Delete Post'
            dialogText={(deleteSuccess) ? 'Post deleted.' : deleteState.message}
            loading={status === ADAPTER_STATES.PENDING}
            cancelCallback={handleDeleteCancel}
            confirmCallback={() => {
              if (deleteSuccess) {
                handleDeleteCancel()
              } else {
                handleDeleteConfirm(deleteState?.tempId ?? null)
              }
            }}
          />
        }
      </SectionComponent>
    </>
  )
}

PostsComponent.propTypes = {
  handleDeleteCancel: PropTypes.func,
  handleDeleteConfirm: PropTypes.func,
  deleteState: PropTypes.object,
  deleteSuccess: PropTypes.bool,
  columns: PropTypes.array
}

export default PostsComponent
