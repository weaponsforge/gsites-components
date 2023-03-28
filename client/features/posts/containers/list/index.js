import PostsComponent from '../../components/list'

function PostsList () {
  return (
    <PostsComponent
      columns={[
        { field: 'title', headerName: 'Title', minWidth: 250, flex: 1 },
        { field: 'country', headerName: 'Country', minWidth: 220 },
        { field: 'slug', headerName: 'Slug', minWidth: 250 },
        { field: 'date_created', headerName: 'Date Created', minWidth: 250 }
      ]}
    />
  )
}

export default PostsList
