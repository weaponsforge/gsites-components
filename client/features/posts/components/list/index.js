import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarContainer
} from '@mui/x-data-grid'

import { SectionComponent } from '@/features/cms'
import HeaderNav from '../layout/headernav'
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

function PostsComponent ({ columns }) {
  const posts = useSelector(state => state.posts.entities)
  const status = useSelector(state => state.posts.status)
  const router = useRouter()

  return (
    <>
      <SectionComponent>
        <HeaderNav
          title='Posts'
          subTitle='This is the Posts List page.'
          buttonLink='/cms/posts/create'
          buttonLabel='Create Post'
        />

        <div style={{ height: 640, width: '100%', textAlign: 'left' }}>
          <DataGrid
            columns={columns}
            rows={Object.values(posts)}
            loading={status === ADAPTER_STATES.PENDING}
            components={{ Toolbar: CustomToolbar }}
            maxColumns={4}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 10 }
              }
            }}
            pageSizeOptions={[10, 20, 50]}
            onRowClick={(row) => {
              // console.log(row)
              router.push(`/cms/posts/view?id=${row.id}`)
            }}
          />
        </div>
      </SectionComponent>
    </>
  )
}

PostsComponent.propTypes = {
  columns: PropTypes.array
}

export default PostsComponent
