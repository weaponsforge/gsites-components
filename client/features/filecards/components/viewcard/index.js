import { HeaderNav } from '@/features/posts'
import { SectionComponent } from '@/features/cms'

function ViewCardComponent () {
  return (
    <SectionComponent>
      <HeaderNav
        title='File Card'
        subTitle='View File Card content.'
        buttonLink='/cms/filecards'
        buttonLabel='Back'
      />
    </SectionComponent>
  )
}

export default ViewCardComponent
