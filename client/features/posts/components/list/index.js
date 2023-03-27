import { useSelector } from 'react-redux'

import { SectionComponent } from '@/features/cms'
import HeaderNav from '../layout/headernav'

function PostsComponent () {
  const posts = useSelector(state => state.posts)
  console.log(posts)

  return (
    <>
      <SectionComponent>
        <HeaderNav
          title='Posts'
          subTitle='This is the Posts List page.'
          buttonLink='/cms/posts/create'
          buttonLabel='Create Post'
        />
      </SectionComponent>
    </>
  )
}

export default PostsComponent
