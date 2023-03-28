import { SectionComponent } from '@/features/cms'
import HeaderNav from '../layout/headernav'

function PostsComponent () {
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
