import { HeaderNav } from '@/features/posts'
import { SectionComponent } from '@/features/cms'

function FileCardsComponent () {
  return (
    <SectionComponent>
      <HeaderNav
        title='File Cards'
        subTitle='This is the File Cards List page.'
        buttonLink='/cms/filecards/create'
        buttonLabel='Create Card'
      />
    </SectionComponent>
  )
}

export default FileCardsComponent
