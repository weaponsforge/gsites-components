import PropTypes from 'prop-types'

import { HeaderNav } from '@/features/posts'
import { SectionComponent } from '@/features/cms'

function CreateCardForm ({
  dialogSettings
}) {
  return (
    <SectionComponent>
      <HeaderNav
        // title='Create Card'
        // subTitle='Create a new File Card here'
        title={dialogSettings.headerTitle}
        subTitle={dialogSettings.headerSubTitle}
        buttonLink='/cms/filecards'
        buttonLabel='Cancel'
      />
    </SectionComponent>
  )
}

CreateCardForm.propTypes = {
  dialogSettings: PropTypes.object
}

export default CreateCardForm
