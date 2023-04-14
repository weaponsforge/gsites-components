import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { ADAPTER_STATES } from '@/store/constants'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

import { HeaderNav } from '@/features/posts'
import { SectionComponent } from '@/features/cms'
import CardPreview from '../cardpreview'
import FormItemsInput from '../formitemsinput'

import AlertDialog from '@/components/common/ui/alertdialog'
import LoadingIndicator from '@/components/common/ui/loadingindicator'

function CreateCardForm ({
  handleSubmit,
  saveCard,
  toggleDialog,
  saveState,
  mode = 'create',
  card,
  dialogSettings
}) {
  const collapse = useMediaQuery('(max-width:1100px)')
  const status = useSelector(state => state.cards.status)
  const router = useRouter()

  const previewCols = useMemo(() => {
    return (!collapse) ? 4 : 6
  }, [collapse])

  const detailCols = useMemo(() => {
    return (!collapse) ? 8 : 6
  }, [collapse])

  return (
    <div>
      <SectionComponent>
        <HeaderNav
          title={dialogSettings.headerTitle}
          subTitle={dialogSettings.headerSubTitle}
          buttonLink='/cms/filecards'
          buttonLabel='Cancel'
        />

        {(mode === 'edit' && card === null)
          ? <LoadingIndicator />
          : <Grid container
            spacing={2}
            sx={{
              marginTop: (theme) => theme.spacing(3),
              '& h6': { marginBottom: '16px' }
            }}
          >
            <Grid item sm={12} md={previewCols}>
              <Typography variant="h6">
                Card Preview
              </Typography>

              <CardPreview />
            </Grid>

            <Grid item sm={12} md={detailCols}>
              <Typography variant="h6">
                Card Details
              </Typography>

              <FormItemsInput
                handleSubmit={handleSubmit}
                card={card}
              />
            </Grid>
          </Grid>
        }
      </SectionComponent>

      {(saveState.isOpenDialog) &&
        <AlertDialog
          isOpen={saveState.isOpenDialog}
          loading={status === ADAPTER_STATES.PENDING}
          dialogTitle={dialogSettings.dialogTitle}
          dialogText={(!saveState.saveSuccess)
            ? dialogSettings.dialogText
            : dialogSettings.dialogTextSuccess
          }
          cancelCallback={() => {
            if (saveState.saveSuccess) {
              router.push(`/cms/filecards/view?id=${card?.id ?? '-'}`)
            } else {
              toggleDialog()
            }
          }}
          confirmCallback={() => {
            if (saveState.saveSuccess) {
              router.push(`/cms/filecards/view?id=${card?.id ?? '-'}`)
            } else {
              saveCard(card?.id ?? null)
            }
          }}
        />
      }
    </div>
  )
}

CreateCardForm.propTypes = {
  handleSubmit: PropTypes.func,
  saveCard: PropTypes.func,
  toggleDialog: PropTypes.func,
  saveState: PropTypes.object,
  mode: PropTypes.string,
  card: PropTypes.object,
  dialogSettings: PropTypes.object
}

export default CreateCardForm
