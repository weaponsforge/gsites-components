import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarContainer
} from '@mui/x-data-grid'

import { HeaderNav } from '@/features/posts'
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

function FileCardsComponent ({
  handleDeleteCancel,
  handleDeleteConfirm,
  deleteState,
  deleteSuccess,
  columns
}) {
  const {ids, entities: cards} = useSelector(state => state.cards)
  const status = useSelector(state => state.cards.status)

  return (
    <SectionComponent>
      <HeaderNav
        title='File Cards'
        subTitle='This is the File Cards List page.'
        buttonLink='/cms/filecards/create'
        buttonLabel='Create Card'
      />

      <div style={{ height: 690, width: '100%', textAlign: 'left' }}>
        <DataGrid
          columns={columns}
          rows={ids.map((id) => (cards[id]))}
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
          dialogTitle='Delete File Card'
          dialogText={(deleteSuccess) ? 'File Card deleted.' : deleteState.message}
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
  )
}

FileCardsComponent.propTypes = {
  handleDeleteCancel: PropTypes.func,
  handleDeleteConfirm: PropTypes.func,
  deleteState: PropTypes.object,
  deleteSuccess: PropTypes.bool,
  columns: PropTypes.array
}

export default FileCardsComponent
